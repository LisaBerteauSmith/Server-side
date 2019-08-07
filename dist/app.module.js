"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const graphql_1 = require("@nestjs/graphql");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const path_1 = require("path");
const cities_module_1 = require("./cities/cities.module");
const trips_module_1 = require("./trips/trips.module");
const prices_module_1 = require("./prices/prices.module");
const users_module_1 = require("./users/users.module");
const cars_module_1 = require("./cars/cars.module");
const gas_module_1 = require("./gas/gas.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                typePaths: ['./**/*.graphql'],
                definitions: {
                    path: path_1.join(process.cwd(), 'src/graphql.ts'),
                },
            }),
            typeorm_1.TypeOrmModule.forRoot(),
            cities_module_1.CitiesModule,
            trips_module_1.TripsModule,
            prices_module_1.PricesModule,
            users_module_1.UsersModule,
            cars_module_1.CarsModule,
            gas_module_1.GasModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map