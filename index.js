function Finalize(_callback) {
	var count = 0,
	    exec  = false;

	if((typeof _callback !== 'undefined') && (_callback !== null)) {
		this.exec = function() {
			exec = true;
			if(count === 0) {
				_callback();
			}
		}
		this.queue = function() {
			count++;
			return function() {
				count--;
				if(exec && (count === 0)) {
					_callback();
				}
			}
		}
	} else {
		this.exec  = function() {};
		this.queue = function() {};
	}
}

module.exports = Finalize;