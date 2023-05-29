"use strict";

require("core-js/modules/es.regexp.exec.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.test = test;
var _jsbi = _interopRequireDefault(require("jsbi"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function test() {
  const n1 = _jsbi.default.add(_jsbi.default.BigInt(Number.MAX_SAFE_INTEGER), _jsbi.default.BigInt(1));
  const n2 = _jsbi.default.BigInt(Number.MAX_SAFE_INTEGER);
  const nr = _jsbi.default.add(n1, n2);
  console.log(n1.toString());
  console.log(n2.toString());
  console.log(nr.toString());
}
test();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ0ZXN0IiwibjEiLCJfanNiaSIsImRlZmF1bHQiLCJhZGQiLCJCaWdJbnQiLCJOdW1iZXIiLCJNQVhfU0FGRV9JTlRFR0VSIiwibjIiLCJuciIsImNvbnNvbGUiLCJsb2ciLCJ0b0xvY2FsZVN0cmluZyJdLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gdGVzdCgpIHtcbiAgY29uc3QgbjEgPSBCaWdJbnQoTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpICsgMW47XG4gIGNvbnN0IG4yID0gQmlnSW50KE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKTtcbiAgY29uc3QgbnIgPSBuMSArIG4yO1xuICBjb25zb2xlLmxvZyhuMS50b0xvY2FsZVN0cmluZygpKTtcbiAgY29uc29sZS5sb2cobjIudG9Mb2NhbGVTdHJpbmcoKSk7XG4gIGNvbnNvbGUubG9nKG5yLnRvTG9jYWxlU3RyaW5nKCkpO1xufVxuXG50ZXN0KCk7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBTyxTQUFTQSxJQUFJQSxDQUFBLEVBQUc7RUFDckIsTUFBTUMsRUFBRSxHQUFBQyxLQUFBLENBQUFDLE9BQUEsQ0FBQUMsR0FBQSxDQUFBRixLQUFBLENBQUFDLE9BQUEsQ0FBQUUsTUFBQSxDQUFVQyxNQUFNLENBQUNDLGdCQUFnQixHQUFBTCxLQUFBLENBQUFDLE9BQUEsQ0FBQUUsTUFBQSxJQUFNO0VBQy9DLE1BQU1HLEVBQUUsR0FBQU4sS0FBQSxDQUFBQyxPQUFBLENBQUFFLE1BQUEsQ0FBVUMsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQztFQUMxQyxNQUFNRSxFQUFFLEdBQUFQLEtBQUEsQ0FBQUMsT0FBQSxDQUFBQyxHQUFBLENBQUdILEVBQUUsRUFBR08sRUFBRTtFQUNsQkUsT0FBTyxDQUFDQyxHQUFHLENBQUNWLEVBQUUsQ0FBQ1csY0FBYyxDQUFDLENBQUMsQ0FBQztFQUNoQ0YsT0FBTyxDQUFDQyxHQUFHLENBQUNILEVBQUUsQ0FBQ0ksY0FBYyxDQUFDLENBQUMsQ0FBQztFQUNoQ0YsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEVBQUUsQ0FBQ0csY0FBYyxDQUFDLENBQUMsQ0FBQztBQUNsQztBQUVBWixJQUFJLENBQUMsQ0FBQyJ9