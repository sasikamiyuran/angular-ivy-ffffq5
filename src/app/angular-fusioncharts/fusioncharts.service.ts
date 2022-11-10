import { Injectable } from '@angular/core';

@Injectable()
export class FusionChartsStatic {
  core: any;
  modules: Function[] = [];
}

@Injectable()
export class FusionChartsService {
  static _fcRoot: any = null;
  _fusionchartsStatice: FusionChartsStatic = new FusionChartsStatic();

  static setFCRoot(fcRoot: any) {
    FusionChartsService._fcRoot = fcRoot;
  }

  static getFCRoot(): any {
    return FusionChartsService._fcRoot;
  }

  static isFCRootSet() {
    return !!FusionChartsService._fcRoot;
  }

  constructor(FCStatic: FusionChartsStatic) {
    let fcRoot: any;
    if (FusionChartsService.isFCRootSet()) {
      fcRoot = FusionChartsService.getFCRoot();
    } else {
      fcRoot = {
        core: FCStatic.core,
        modules: FCStatic.modules
      };
    }
    this.resolveFusionCharts(fcRoot.core, fcRoot.modules);
  }

  resolveFusionCharts(core: any, modules: any[]) {
    if (core?.id === 'FusionCharts') {
      this._fusionchartsStatice = core;
    } else {
      this._fusionchartsStatice = core();
    }

    if (modules) {
      modules.forEach((FusionChartsModules: any) => {
        if (
          (FusionChartsModules.getName && FusionChartsModules.getType) ||
          (FusionChartsModules.name && FusionChartsModules.type)
        ) {
          core.addDep(FusionChartsModules);
        } else {
          FusionChartsModules(core);
        }
      });
    }
  }

  getFusionChartsStatic() {
    return this._fusionchartsStatice;
  }

}
