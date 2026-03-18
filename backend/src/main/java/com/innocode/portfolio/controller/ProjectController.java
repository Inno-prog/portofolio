package com.innocode.portfolio.controller;

import com.innocode.portfolio.entity.Project;
import com.innocode.portfolio.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
public class ProjectController {

    private final ProjectService projectService;

    @GetMapping
    public List<Project> getAll(@RequestParam(required = false) Boolean featured) {
        return Boolean.TRUE.equals(featured) ? projectService.getFeatured() : projectService.getAll();
    }
}
