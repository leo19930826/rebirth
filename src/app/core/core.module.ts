import { NgModule, SkipSelf, Optional } from '@angular/core';
import { RebirthHttpModule } from 'rebirth-http';
import { RebirthStorageModule } from 'rebirth-storage';
import { LoadService } from './loading';
import { ArticleService } from './article-service';
import { REBIRTH_WINDOW_PROVIDERS } from './rebirth-common';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    HttpModule,
    RebirthHttpModule,
    RebirthStorageModule
  ],
  providers: [
    LoadService,
    ArticleService,
    ...REBIRTH_WINDOW_PROVIDERS
  ],
  exports: [
    RebirthHttpModule,
    RebirthStorageModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
