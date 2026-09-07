package com.innocode.portfolio.controller;

import com.innocode.portfolio.dto.PortfolioContent;
import com.innocode.portfolio.entity.Experience;
import com.innocode.portfolio.entity.Project;
import com.innocode.portfolio.entity.ServiceItem;
import com.innocode.portfolio.service.ExperienceService;
import com.innocode.portfolio.service.ProjectService;
import com.innocode.portfolio.service.ServiceItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.CacheControl;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.TimeUnit;

@RestController
@RequestMapping("/api/portfolio")
@RequiredArgsConstructor
public class PortfolioController {

    private final ProjectService projectService;
    private final ExperienceService experienceService;
    private final ServiceItemService serviceItemService;

    @GetMapping("/all")
    public ResponseEntity<PortfolioContent> getAll() {
        List<Project> projects = projectService.getAll();
        List<Experience> experiences = experienceService.getAll();
        List<ServiceItem> services = serviceItemService.getAll();

        PortfolioContent content = new PortfolioContent(
            projects, experiences, services, System.currentTimeMillis()
        );

        return ResponseEntity.ok()
            .cacheControl(CacheControl.maxAge(5, TimeUnit.MINUTES).cachePrivate())
            .header("X-Content-Type-Options", "nosniff")
            .body(content);
    }
}
