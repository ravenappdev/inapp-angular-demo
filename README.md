# InApp Angular SDK Demo App
This sample app shows how to use InApp Angular SDK in your own Angular app. The InApp Angular SDK allows you to -

* Manage notification center in you app.

### InApp Angular SDK

You can visit our [SDK docs](https://github.com/ravenappdev/inapp-angular-sdk) to setup the InApp angular SDK in your app.

## How to run this sample app

### Step 1.&#x20;

Run the following commands in the project root directory :

```
npm i @ravenapp/raven-inapp-angular
```

### Step 2.

Import RavenInAppModule from @ravenapp/raven-inapp-angular and add it to the imports array in the app.module.ts file.

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RavenInAppModule } from 'raven-inapp';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RavenInAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Step 3.

Please refer to the below code to consume the InApp Angular SDK in your app.

```
<raven-inapp-angular
      [color]="<color>"
      [indicatorType]="<indicator_type>"
      [userId]="<user_id>"
      [appId]="<app_id>"
      [signature]="<signature>"
      [onClickNotification]="<callbackFunction_reference>"
    >
</raven-inapp-angular>
```

* indicatorType accepts two values i.e 'dot' and 'count'.
* If you are passing strings directly without storing in variable, please enclose them in single quotes.

You can use this code in any of the \*.component.html files.

