#!/usr/bin/env ts-node
"use strict";
;
function myTest(args) {
    if (args.name) {
        return "Hello, " + args.name + "!";
    }
    return "Hello, World!";
}
console.log(myTest({ id: 1, name: "Allie" }));
