type Func = (arg: any) => any

function pipe(funcs: Array<Func>): Func {
	// your code here
	
	return function(initial) {
		return funcs.reduce((acc, cur) => cur(acc), initial)
	}
}