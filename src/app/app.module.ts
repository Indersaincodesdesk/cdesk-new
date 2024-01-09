import { NgModule } from '@angular/core';
declare var $: any;
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { CareerComponent } from './career/career.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    AboutComponent,
    ServiceComponent,
    OurWorkComponent,
    BlogListComponent,
    BlogDetailComponent,
    ContactUsComponent,
    OurTeamComponent,
    CareerComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    ServiceDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
