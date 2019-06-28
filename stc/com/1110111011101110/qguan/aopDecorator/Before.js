
//前置通知
export function Before(beforeFn = function () { }) {
    return function (target, name, descriptor) {
        let oldValue = descriptor.value;

        descriptor.value = function () {
            beforeFn.apply(this, arguments);
            return oldValue.apply(this, arguments);
        };

        return descriptor;
    }
}
