import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'our-work', component: OurWorkComponent },
  { path: 'blog-list', component: BlogListComponent },
  { path: 'resource', component: BlogDetailComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'our-team', component: OurTeamComponent },
  { path: 'career', component: CareerComponent },
  { path: 'privacy', component: PrivacyPolicyComponent },
  { path: 'terms', component: TermsConditionsComponent },
  { path: 'service-details', component: ServiceDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
