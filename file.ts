type Constructor<T = {}> = new (...args: any[]) => T;


function ClassWithName<TBase extends Constructor>(Base: TBase) {
	return class extends Base {

		private _name: string;

		public set name(value: string) {
			this._name = value;
		}

		public get name(): string {
			return this._name;
		}

		constructor(...args: any[]) {
			super(args);
			this._name = null;
		}
	}
}