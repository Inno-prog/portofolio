package com.innocode.portfolio.dto;

import com.innocode.portfolio.entity.Experience;
import com.innocode.portfolio.entity.Project;
import com.innocode.portfolio.entity.ServiceItem;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PortfolioContent {
    private List<Project> projects;
    private List<Experience> experiences;
    private List<ServiceItem> services;
    private long timestamp;
}
