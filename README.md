
JKube / OpenShift usage (assembly-based image)

This project is configured to use Eclipse JKube's OpenShift plugin to build an image that embeds the built WAR into a UBI-based OpenJDK image via an assembly (no Dockerfile required).

Summary
- The plugin will take the WAR produced by `mvn package` and create an image using `registry.access.redhat.com/ubi8/openjdk-17:1.20-2` as the base image.
- By default the image name is configured via the `jkube.imageName` Maven property. Override it on the command line when needed.

Important properties
- `jkube.imageName` (default in `pom.xml`): set this to a fully qualified registry name before building/pushing.

Example values
- `registry.example.com/yourproject/web-ocp:${project.version}`
- For OpenShift internal registry you can use: `image-registry.openshift-image-registry.svc:5000/<your-namespace>/web-ocp:${project.version}`

Local build & OpenShift deploy (assembly approach)

1) Build WAR and create local JKube resources:

```powershell
mvn -DskipTests clean package
mvn openshift:resource
```

2) Build and deploy to OpenShift (requires `oc login` and access to the target project):

```powershell
# set image name if you want to push to a specific registry
mvn -Djkube.imageName=registry.example.com/yourproject/web-ocp:${project.version} openshift:build openshift:apply
```

Notes
- If you want JKube to push to an external registry, ensure credentials are available (e.g., via Docker CLI login or by configuring JKube registry settings in your CI environment).
- Alternatively, you can let OpenShift create a BuildConfig and do source builds there; see JKube docs for `openshift:build` vs `openshift:resource`.
- This approach embeds the WAR into the image using the assembly configuration in `pom.xml`. If you prefer to use your own `Dockerfile`, add it to the repo and change the JKube configuration accordingly.

Want me to tweak the image name or add a Dockerfile example? Provide the registry/namespace you'd like and I will update `pom.xml` and README accordingly.
