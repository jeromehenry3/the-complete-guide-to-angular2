import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [ // components to be declared
    AppComponent,
    ServerComponent,
    ServersComponent,
  ],
  imports: [ // allows to add other modules
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent] // components to be aware of at the loading
})
export class AppModule { }
