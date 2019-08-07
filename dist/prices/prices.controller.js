"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let PricesController = class PricesController {
    getPrices() {
        return `This gets all the prices`;
    }
    createPrices() {
        return `This posts all the prices`;
    }
    deletePrices() {
        return `This deletes all the prices`;
    }
    updatePrices() {
        return `This updates all the prices`;
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], PricesController.prototype, "getPrices", null);
__decorate([
    common_1.Post(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], PricesController.prototype, "createPrices", null);
__decorate([
    common_1.Delete(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], PricesController.prototype, "deletePrices", null);
__decorate([
    common_1.Patch(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], PricesController.prototype, "updatePrices", null);
PricesController = __decorate([
    common_1.Controller('prices')
], PricesController);
exports.PricesController = PricesController;
//# sourceMappingURL=prices.controller.js.map