import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { IntroComponentComponent } from './intro-component/intro-component.component';
import { ServiceComponentComponent } from './service-component/service-component.component';
import { LatestPropertiesComponentComponent } from './latest-properties-component/latest-properties-component.component';
import { AgentComponentComponent } from './agent-component/agent-component.component';
import { LatestNewsComponentComponent } from './latest-news-component/latest-news-component.component';
import { TestimonialsComponentComponent } from './testimonials-component/testimonials-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { PropertyGridComponent } from './property-grid/property-grid.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { BlogGrigComponent } from './blog-grig/blog-grig.component';
import { PropertySingleComponent } from './property-single/property-single.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { AgentSingleComponent } from './agent-single/agent-single.component';
import { AgentGridComponent } from './agent-grid/agent-grid.component';
import { ContactComponent } from './contact/contact.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ListBankComponent } from './list-bank/list-bank.component';
import { ClaimsComponent } from './claims/claims.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListSearchComponent } from './list-search/list-search.component';
import { CreateSearchComponent } from './create-search/create-search.component';
import { EditSearchComponent } from './edit-search/edit-search.component';
import { DetailsSearchComponent } from './details-search/details-search.component';
import { EditCommentComponent } from './edit-comment/edit-comment.component';
import { EmailComponent } from './email/email.component';
import { AdminComponent } from './admin/admin.component';
import { StatComponent } from './stat/stat.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CharttComponent } from './chart/chart.component';


@NgModule({  
  declarations: [
    AppComponent,
    SearchComponentComponent,
    NavbarComponentComponent,
    IntroComponentComponent,
    ServiceComponentComponent,
    LatestPropertiesComponentComponent,
    AgentComponentComponent,
    LatestNewsComponentComponent,
    TestimonialsComponentComponent,
    FooterComponentComponent,
    PropertyGridComponent,
    HomeComponent,
    AboutComponent,
    ErrorComponent,
    BlogGrigComponent,
    PropertySingleComponent,
    BlogSingleComponent,
    AgentSingleComponent,
    AgentGridComponent,
    ContactComponent,
    SignInComponent,
    SignUpComponent,
    ListBankComponent,
    ClaimsComponent,
    ListSearchComponent,
    CreateSearchComponent,
    EditSearchComponent,
    DetailsSearchComponent,
    EditCommentComponent,
    EmailComponent,
    AdminComponent,
    StatComponent,
    CharttComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
