import {config as baseConfig} from "../wdio.conf"
export const config = Object.assign(baseConfig, {
    environment: "TEST",
    sauceDemoURL: "https://www.saucedemo.com"
})