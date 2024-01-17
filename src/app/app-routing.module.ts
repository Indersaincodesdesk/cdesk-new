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
import { LuxandnyxComponent } from './luxandnyx/luxandnyx.component';
import { ErrorComponent } from './error/error.component';
import { ParisSelectComponent } from './paris-select/paris-select.component';
import { EgyptianqueenbeautyComponent } from './egyptianqueenbeauty/egyptianqueenbeauty.component';
import { MenshealthclinicComponent } from './menshealthclinic/menshealthclinic.component';
import { ProtechComponent } from './protech/protech.component';
import { GrippsComponent } from './gripps/gripps.component';
import { FameschocolatesComponent } from './fameschocolates/fameschocolates.component';
import { AnansipalaceforkidsComponent } from './anansipalaceforkids/anansipalaceforkids.component';
import { ShopifyWebDevelopmentComponent } from './shopify-web-development/shopify-web-development.component';
import { StrategyComponent } from './strategy/strategy.component';
import { DataMigrationComponent } from './data-migration/data-migration.component';
import { ShopifyAppDevelopmentComponent } from './shopify-app-development/shopify-app-development.component';
import { ShopifyAppsBlogComponent } from './shopify-apps-blog/shopify-apps-blog.component';
import { Resource3Component } from './resource-3/resource-3.component';
import { Resource4Component } from './resource-4/resource-4.component';
import { Resource5Component } from './resource-5/resource-5.component';
import { Resource6Component } from './resource-6/resource-6.component';
import { Resource7Component } from './resource-7/resource-7.component';
import { Resource8Component } from './resource-8/resource-8.component';
import { Resource9Component } from './resource-9/resource-9.component';
import { Resource10Component } from './resource-10/resource-10.component';
import { Resource11Component } from './resource-11/resource-11.component';
import { Resource12Component } from './resource-12/resource-12.component';
import { Resource13Component } from './resource-13/resource-13.component';
import { Resource14Component } from './resource-14/resource-14.component';

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
  { path: 'luxandnyx', component: LuxandnyxComponent },
  { path: 'paris-select', component: ParisSelectComponent },
  { path: 'egyptian', component: EgyptianqueenbeautyComponent },
  { path: 'm-h-c', component: MenshealthclinicComponent },
  { path: 'protech', component: ProtechComponent },
  { path: 'gripps', component: GrippsComponent },
  { path: 'fames-chocolates', component: FameschocolatesComponent },
  { path: 'anansi-palace', component: AnansipalaceforkidsComponent },
  { path: 'shopify-web', component: ShopifyWebDevelopmentComponent },
  { path: 'strategy&cro', component: StrategyComponent },
  { path: 'data-migration', component: DataMigrationComponent },
  { path: 'shopify-app', component: ShopifyAppDevelopmentComponent },
  { path: 'resource-2', component: ShopifyAppsBlogComponent },
  { path: 'resource-3', component: Resource3Component },
  { path: 'resource-4', component: Resource4Component },
  { path: 'resource-5', component: Resource5Component },
  { path: 'resource-6', component: Resource6Component },
  { path: 'resource-7', component: Resource7Component },
  { path: 'resource-8', component: Resource8Component },
  { path: 'resource-9', component: Resource9Component },
  { path: 'resource-10', component: Resource10Component },
  { path: 'resource-11', component: Resource11Component },
  { path: 'resource-12', component: Resource12Component },
  { path: 'resource-13', component: Resource13Component },
  { path: 'resource-14', component: Resource14Component },


  {path: '**', component: ErrorComponent, data: 
  {
    title: '',
    descrption:""
  }
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
