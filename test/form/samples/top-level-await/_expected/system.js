System.register([], (function () {
	'use strict';
	return {
		execute: (async function () {

			const __tla_promise_0 = (async () => {
				await operation();

				await retainedOperation();

				const usedAsync = 5;
return { get foo() { return usedAsync; } };
			})();

			const usedSync = 5;
			const [{ foo: usedAsync }] = await Promise.all([__tla_promise_0]);


			console.log(usedAsync, usedSync, usedAsync, usedSync);

		})
	};
}));
