package com.ebusiness.web_ocp;

import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

public class ServletInitializer extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(WebOcpApplication.class);
	}

}

// This file has been moved to the new package: com.ebusiness.web_ocp
// Original ServletInitializer moved during rebranding. Kept as placeholder to avoid accidental edits.
