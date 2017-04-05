/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './app.module';
import * as import82 from '@angular/core/src/linker/view';
import * as import84 from '@angular/core/src/linker/view_utils';
import * as import88 from '@angular/core/src/linker/component_factory';
import * as import89 from '../components/nav/nav';
import * as import90 from '../components/nav/nav.ngfactory';
import * as import95 from '../components/slides/slides';
import * as import96 from '../components/slides/slides.ngfactory';
import * as import97 from '@angular/core/src/linker/view_container';
import * as import98 from '../node_modules/@angular/common/src/directives/ng_for.ngfactory';
export declare const AppModuleNgFactory: import0.NgModuleFactory<import1.AppModule>;
export declare class Wrapper_ApiDemoApp {
    _eventHandler: Function;
    context: import1.ApiDemoApp;
    _changed: boolean;
    constructor();
    ngOnDetach(view: import82.AppView<any>, componentView: import82.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    ngDoCheck(view: import82.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import82.AppView<any>, componentView: import82.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import82.AppView<any>, _eventHandler: any): void;
}
export declare class Wrapper_ApiDemoPage {
    _eventHandler: Function;
    context: import1.ApiDemoPage;
    _changed: boolean;
    constructor();
    ngOnDetach(view: import82.AppView<any>, componentView: import82.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    ngDoCheck(view: import82.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import82.AppView<any>, componentView: import82.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import82.AppView<any>, _eventHandler: any): void;
}
export declare const ApiDemoAppNgFactory: import88.ComponentFactory<import1.ApiDemoApp>;
export declare class View_ApiDemoApp0 extends import82.AppView<import1.ApiDemoApp> {
    _el_0: any;
    compView_0: import82.AppView<import89.Nav>;
    _Nav_0_3: import90.Wrapper_Nav;
    constructor(viewUtils: import84.ViewUtils, parentView: import82.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import88.ComponentRef<any>;
    injectorGetInternal(token: any, requestNodeIndex: number, notFoundResult: any): any;
    detectChangesInternal(throwOnChange: boolean): void;
    destroyInternal(): void;
}
export declare const ApiDemoPageNgFactory: import88.ComponentFactory<import1.ApiDemoPage>;
export declare class View_ApiDemoPage0 extends import82.AppView<import1.ApiDemoPage> {
    _el_0: any;
    compView_0: import82.AppView<import95.Slides>;
    _Slides_0_3: import96.Wrapper_Slides;
    _text_1: any;
    _anchor_2: any;
    _vc_2: import97.ViewContainer;
    _TemplateRef_2_5: any;
    _NgFor_2_6: import98.Wrapper_NgFor;
    _text_3: any;
    _text_4: any;
    _arr_10: any;
    constructor(viewUtils: import84.ViewUtils, parentView: import82.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import88.ComponentRef<any>;
    injectorGetInternal(token: any, requestNodeIndex: number, notFoundResult: any): any;
    detectChangesInternal(throwOnChange: boolean): void;
    destroyInternal(): void;
    visitProjectableNodesInternal(nodeIndex: number, ngContentIndex: number, cb: any, ctx: any): void;
    createEmbeddedViewInternal(nodeIndex: number): import82.AppView<any>;
}