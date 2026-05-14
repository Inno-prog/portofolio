import { Component, OnInit } from '@angular/core';
import { SitemapService } from '../../services/sitemap.service';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-sitemap',
  template: '',
  standalone: true
})
export class SitemapComponent implements OnInit {

  constructor(
    private sitemapService: SitemapService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    const sitemap = this.sitemapService.generateSitemap();
    
    // Afficher le XML brut
    this.document.open();
    this.document.write(sitemap);
    this.document.close();
  }
}