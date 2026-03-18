package com.innocode.portfolio.service;

import com.innocode.portfolio.entity.Project;
import com.innocode.portfolio.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;

    public List<Project> getAll() {
        return projectRepository.findAll();
    }

    public List<Project> getFeatured() {
        return projectRepository.findByFeaturedTrue();
    }
}
