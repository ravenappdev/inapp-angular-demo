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
      [fontStyle]="<fontStyle>"
      [userId]="<user_id>"
      [appId]="<app_id>"
      [signature]="<signature>"
      [onClickNotification]="<callbackFunction_reference>"
    >
</raven-inapp-angular>
```

|Attribute | Purpose | Examples |
|--------- | ------- | -------- |
|color | This color gets applied to the button's and loading spinner in the sdk. | 'red', '#FF0000', 'rgb(255,0,0)' (only strings) |
|indicatorType| This attribute accepts only two values i.e 'dot', 'count'. This attribute indicates the new notification arrival. The 'dot' show's a dot on the bell icon whenever a new notifications comes and the 'count' show's the count of new notifications. | 'dot', 'count' (only strings) |
|fontStyle| This attribute can be used to change the font family in the sdk. | 'Times', 'Courier' etc (only strings) |
|userId | | |
|appId| | | 
|signature| | |
|onClickNotification| This attribute can be used to control the click action whenever user click's on the notification.|You have to pass the function's reference which will be triggered when user clicks on the notification. |

* Note: userId, appId and signature are the compulsory attributes, remaining are optional.
 
You can use this code in any of the \*.component.html files.

