# Filigree OpenShift Container Platform (OCP) Deployment

This repository contains a GitHub Actions workflow for deploying applications to OpenShift Container Platform.

## Prerequisites

Before using this repository, you need to configure the following GitHub repository secrets:

### Required Secrets

1. **OPENSHIFT_SERVER** - The URL of your OpenShift cluster server
2. **OPENSHIFT_TOKEN** - Authentication token for your OpenShift cluster

## Configuring OpenShift Secrets

### Method 1: Using GitHub Web Interface

1. Go to your repository on GitHub
2. Click on **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add the following secrets:
   - Name: `OPENSHIFT_SERVER`, Value: `https://your-openshift-cluster-url`
   - Name: `OPENSHIFT_TOKEN`, Value: `your-openshift-token`

### Method 2: Using GitHub CLI

```bash
gh secret set OPENSHIFT_SERVER --body "https://your-openshift-cluster-url"
gh secret set OPENSHIFT_TOKEN --body "your-openshift-token"
```

## Getting OpenShift Credentials

### Server URL
Your OpenShift server URL typically looks like:
- `https://api.cluster-name.domain.com:6443` (for OpenShift 4.x)
- `https://console.openshift.com` (for OpenShift Online)

### Authentication Token

#### Option 1: Using oc CLI
```bash
oc login https://your-openshift-server
oc whoami -t
```

#### Option 2: From OpenShift Web Console
1. Log into your OpenShift web console
2. Click on your username in the top right
3. Select "Copy login command"
4. Click "Display Token"
5. Copy the token value

### Service Account (Recommended for CI/CD)

For production use, it's recommended to use a service account token:

```bash
# Create a service account
oc create serviceaccount github-actions

# Grant necessary permissions
oc policy add-role-to-user edit system:serviceaccount:your-namespace:github-actions

# Get the service account token
oc serviceaccounts get-token github-actions
```

## Workflow Configuration

The GitHub Actions workflow (`.github/workflows/openshift.yml`) will:

1. Check that required secrets are configured
2. Build a container image from your Dockerfile
3. Push the image to GitHub Container Registry (GHCR)
4. Deploy the application to OpenShift
5. Expose the application via an OpenShift route

## Customization

You can customize the deployment by editing the environment variables in `.github/workflows/openshift.yml`:

- `OPENSHIFT_NAMESPACE`: Target namespace (leave blank for default)
- `APP_NAME`: Application name (defaults to repository name)
- `APP_PORT`: Application port (auto-detected if blank)
- `IMAGE_REGISTRY`: Container registry (defaults to GHCR)

## Triggering Deployment

The workflow triggers on:
- Manual dispatch (workflow_dispatch)
- Push to main branch

## Troubleshooting

### Common Issues

1. **Secret not set error**: Ensure both `OPENSHIFT_SERVER` and `OPENSHIFT_TOKEN` are configured as repository secrets
2. **Authentication failed**: Verify your token is valid and hasn't expired
3. **Permission denied**: Ensure your token/service account has sufficient permissions in the target namespace

### Getting Help

- [OpenShift Documentation](https://docs.openshift.com/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Red Hat Actions](https://github.com/redhat-actions/)