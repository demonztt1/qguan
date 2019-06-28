/**
 * 最终通知
 */

export function After(afterFn = function () { }) {
    return function (target, name, descriptor) {
        let oldValue = descriptor.value;

        descriptor.value = function () {
            let ret = oldValue.apply(this, arguments);
            afterFn.apply(this, arguments);
            return ret;
        };

        return descriptor;
    }
}
