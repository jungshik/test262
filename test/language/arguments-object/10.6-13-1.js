// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 10.6-13-1
description: Accessing caller property of Arguments object is allowed
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
  try 
  {
    arguments.caller;
    return true;
  }
  catch (e) {
  }
 }
runTestCase(testcase);
