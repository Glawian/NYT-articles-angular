import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiRequestsService } from './services/api-requests.service';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { SingleArticleComponent } from './components/single-article/single-article.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        DashboardComponent,
        ArticlesComponent,
        SingleArticleComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ButtonModule,
        CalendarModule,
        DropdownModule,
        SliderModule,
        AppRoutingModule
    ],
    providers: [ApiRequestsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
