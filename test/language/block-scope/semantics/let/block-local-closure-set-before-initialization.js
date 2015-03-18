// Copyright (C) Copyright 2011 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 13.1
description: >
    let: block local closure [[Set]] before initialization.
    (TDZ, Temporal Dead Zone)
negative: ReferenceError
---*/
{
  function f() { x = 1; }
  f();
  let x;
}
