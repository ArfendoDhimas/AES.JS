// Author			: https://github.com/ArfendoDhimas
// Reference	: https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.197.pdf

var RINJDAEL_PRESET = {
	SBOX: function(index)
	{
		var data = [
				0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x01, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76,
				0xca, 0x82, 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0, 0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0,
				0xb7, 0xfd, 0x93, 0x26, 0x36, 0x3f, 0xf7, 0xcc, 0x34, 0xa5, 0xe5, 0xf1, 0x71, 0xd8, 0x31, 0x15,
				0x04, 0xc7, 0x23, 0xc3, 0x18, 0x96, 0x05, 0x9a, 0x07, 0x12, 0x80, 0xe2, 0xeb, 0x27, 0xb2, 0x75,
				0x09, 0x83, 0x2c, 0x1a, 0x1b, 0x6e, 0x5a, 0xa0, 0x52, 0x3b, 0xd6, 0xb3, 0x29, 0xe3, 0x2f, 0x84,
				0x53, 0xd1, 0x00, 0xed, 0x20, 0xfc, 0xb1, 0x5b, 0x6a, 0xcb, 0xbe, 0x39, 0x4a, 0x4c, 0x58, 0xcf,
				0xd0, 0xef, 0xaa, 0xfb, 0x43, 0x4d, 0x33, 0x85, 0x45, 0xf9, 0x02, 0x7f, 0x50, 0x3c, 0x9f, 0xa8,
				0x51, 0xa3, 0x40, 0x8f, 0x92, 0x9d, 0x38, 0xf5, 0xbc, 0xb6, 0xda, 0x21, 0x10, 0xff, 0xf3, 0xd2,
				0xcd, 0x0c, 0x13, 0xec, 0x5f, 0x97, 0x44, 0x17, 0xc4, 0xa7, 0x7e, 0x3d, 0x64, 0x5d, 0x19, 0x73,
				0x60, 0x81, 0x4f, 0xdc, 0x22, 0x2a, 0x90, 0x88, 0x46, 0xee, 0xb8, 0x14, 0xde, 0x5e, 0x0b, 0xdb,
				0xe0, 0x32, 0x3a, 0x0a, 0x49, 0x06, 0x24, 0x5c, 0xc2, 0xd3, 0xac, 0x62, 0x91, 0x95, 0xe4, 0x79,
				0xe7, 0xc8, 0x37, 0x6d, 0x8d, 0xd5, 0x4e, 0xa9, 0x6c, 0x56, 0xf4, 0xea, 0x65, 0x7a, 0xae, 0x08,
				0xba, 0x78, 0x25, 0x2e, 0x1c, 0xa6, 0xb4, 0xc6, 0xe8, 0xdd, 0x74, 0x1f, 0x4b, 0xbd, 0x8b, 0x8a,
				0x70, 0x3e, 0xb5, 0x66, 0x48, 0x03, 0xf6, 0x0e, 0x61, 0x35, 0x57, 0xb9, 0x86, 0xc1, 0x1d, 0x9e,
				0xe1, 0xf8, 0x98, 0x11, 0x69, 0xd9, 0x8e, 0x94, 0x9b, 0x1e, 0x87, 0xe9, 0xce, 0x55, 0x28, 0xdf,
				0x8c, 0xa1, 0x89, 0x0d, 0xbf, 0xe6, 0x42, 0x68, 0x41, 0x99, 0x2d, 0x0f, 0xb0, 0x54, 0xbb, 0x16
		];
		return data[index];
	},

	INVERS_SBOX: function(index)
	{
		var data = [
				0x52, 0x09, 0x6a, 0xd5, 0x30, 0x36, 0xa5, 0x38, 0xbf, 0x40, 0xa3, 0x9e, 0x81, 0xf3, 0xd7, 0xfb,
				0x7c, 0xe3, 0x39, 0x82, 0x9b, 0x2f, 0xff, 0x87, 0x34, 0x8e, 0x43, 0x44, 0xc4, 0xde, 0xe9, 0xcb,
				0x54, 0x7b, 0x94, 0x32, 0xa6, 0xc2, 0x23, 0x3d, 0xee, 0x4c, 0x95, 0x0b, 0x42, 0xfa, 0xc3, 0x4e,
				0x08, 0x2e, 0xa1, 0x66, 0x28, 0xd9, 0x24, 0xb2, 0x76, 0x5b, 0xa2, 0x49, 0x6d, 0x8b, 0xd1, 0x25,
				0x72, 0xf8, 0xf6, 0x64, 0x86, 0x68, 0x98, 0x16, 0xd4, 0xa4, 0x5c, 0xcc, 0x5d, 0x65, 0xb6, 0x92,
				0x6c, 0x70, 0x48, 0x50, 0xfd, 0xed, 0xb9, 0xda, 0x5e, 0x15, 0x46, 0x57, 0xa7, 0x8d, 0x9d, 0x84,
				0x90, 0xd8, 0xab, 0x00, 0x8c, 0xbc, 0xd3, 0x0a, 0xf7, 0xe4, 0x58, 0x05, 0xb8, 0xb3, 0x45, 0x06,
				0xd0, 0x2c, 0x1e, 0x8f, 0xca, 0x3f, 0x0f, 0x02, 0xc1, 0xaf, 0xbd, 0x03, 0x01, 0x13, 0x8a, 0x6b,
				0x3a, 0x91, 0x11, 0x41, 0x4f, 0x67, 0xdc, 0xea, 0x97, 0xf2, 0xcf, 0xce, 0xf0, 0xb4, 0xe6, 0x73,
				0x96, 0xac, 0x74, 0x22, 0xe7, 0xad, 0x35, 0x85, 0xe2, 0xf9, 0x37, 0xe8, 0x1c, 0x75, 0xdf, 0x6e,
				0x47, 0xf1, 0x1a, 0x71, 0x1d, 0x29, 0xc5, 0x89, 0x6f, 0xb7, 0x62, 0x0e, 0xaa, 0x18, 0xbe, 0x1b,
				0xfc, 0x56, 0x3e, 0x4b, 0xc6, 0xd2, 0x79, 0x20, 0x9a, 0xdb, 0xc0, 0xfe, 0x78, 0xcd, 0x5a, 0xf4,
				0x1f, 0xdd, 0xa8, 0x33, 0x88, 0x07, 0xc7, 0x31, 0xb1, 0x12, 0x10, 0x59, 0x27, 0x80, 0xec, 0x5f,
				0x60, 0x51, 0x7f, 0xa9, 0x19, 0xb5, 0x4a, 0x0d, 0x2d, 0xe5, 0x7a, 0x9f, 0x93, 0xc9, 0x9c, 0xef,
				0xa0, 0xe0, 0x3b, 0x4d, 0xae, 0x2a, 0xf5, 0xb0, 0xc8, 0xeb, 0xbb, 0x3c, 0x83, 0x53, 0x99, 0x61,
				0x17, 0x2b, 0x04, 0x7e, 0xba, 0x77, 0xd6, 0x26, 0xe1, 0x69, 0x14, 0x63, 0x55, 0x21, 0x0c, 0x7d
		];
		return data[index];
	},

	RCON: function(index)
	{
		var data = [
				[1,0,0,0],
				[2,0,0,0],
				[4,0,0,0],
				[8,0,0,0],
				[16,0,0,0],
				[32,0,0,0],
				[64,0,0,0],
				[128,0,0,0],
				[27,0,0,0],
				[54,0,0,0]
		];
		return data[index];
	},
	GF_Field: {
		E: function(index) {
			var data = [
				0x01, 0x03, 0x05, 0x0F, 0x11, 0x33, 0x55, 0xFF, 0x1A, 0x2E, 0x72, 0x96, 0xA1, 0xF8, 0x13, 0x35,
				0x5F, 0xE1, 0x38, 0x48, 0xD8, 0x73, 0x95, 0xA4, 0xF7, 0x02, 0x06, 0x0A, 0x1E, 0x22, 0x66, 0xAA,
				0xE5, 0x34, 0x5C, 0xE4, 0x37, 0x59, 0xEB, 0x26, 0x6A, 0xBE, 0xD9, 0x70, 0x90, 0xAB, 0xE6, 0x31,
				0x53, 0xF5, 0x04, 0x0C, 0x14, 0x3C, 0x44, 0xCC, 0x4F, 0xD1, 0x68, 0xB8, 0xD3, 0x6E, 0xB2, 0xCD,
				0x4C, 0xD4, 0x67, 0xA9, 0xE0, 0x3B, 0x4D, 0xD7, 0x62, 0xA6, 0xF1, 0x08, 0x18, 0x28, 0x78, 0x88,
				0x83, 0x9E, 0xB9, 0xD0, 0x6B, 0xBD, 0xDC, 0x7F, 0x81, 0x98, 0xB3, 0xCE, 0x49, 0xDB, 0x76, 0x9A,
				0xB5, 0xC4, 0x57, 0xF9, 0x10, 0x30, 0x50, 0xF0, 0x0B, 0x1D, 0x27, 0x69, 0xBB, 0xD6, 0x61, 0xA3,
				0xFE, 0x19, 0x2B, 0x7D, 0x87, 0x92, 0xAD, 0xEC, 0x2F, 0x71, 0x93, 0xAE, 0xE9, 0x20, 0x60, 0xA0,
				0xFB, 0x16, 0x3A, 0x4E, 0xD2, 0x6D, 0xB7, 0xC2, 0x5D, 0xE7, 0x32, 0x56, 0xFA, 0x15, 0x3F, 0x41,
				0xC3, 0x5E, 0xE2, 0x3D, 0x47, 0xC9, 0x40, 0xC0, 0x5B, 0xED, 0x2C, 0x74, 0x9C, 0xBF, 0xDA, 0x75,
				0x9F, 0xBA, 0xD5, 0x64, 0xAC, 0xEF, 0x2A, 0x7E, 0x82, 0x9D, 0xBC, 0xDF, 0x7A, 0x8E, 0x89, 0x80,
				0x9B, 0xB6, 0xC1, 0x58, 0xE8, 0x23, 0x65, 0xAF, 0xEA, 0x25, 0x6F, 0xB1, 0xC8, 0x43, 0xC5, 0x54,
				0xFC, 0x1F, 0x21, 0x63, 0xA5, 0xF4, 0x07, 0x09, 0x1B, 0x2D, 0x77, 0x99, 0xB0, 0xCB, 0x46, 0xCA,
				0x45, 0xCF, 0x4A, 0xDE, 0x79, 0x8B, 0x86, 0x91, 0xA8, 0xE3, 0x3E, 0x42, 0xC6, 0x51, 0xF3, 0x0E,
				0x12, 0x36, 0x5A, 0xEE, 0x29, 0x7B, 0x8D, 0x8C, 0x8F, 0x8A, 0x85, 0x94, 0xA7, 0xF2, 0x0D, 0x17,
				0x39, 0x4B, 0xDD, 0x7C, 0x84, 0x97, 0xA2, 0xFD, 0x1C, 0x24, 0x6C, 0xB4, 0xC7, 0x52, 0xF6, 0x01
			];
			return data[index];
		},
		L: function(index) {
			var data = [
				null, 0x00, 0x19, 0x01, 0x32, 0x02, 0x1A, 0xC6, 0x4B, 0xC7, 0x1B, 0x68, 0x33, 0xEE, 0xDF, 0x03,
				0x64, 0x04, 0xE0, 0x0E, 0x34, 0x8D, 0x81, 0xEF, 0x4C, 0x71, 0x08, 0xC8, 0xF8, 0x69, 0x1C, 0xC1,
				0x7D, 0xC2, 0x1D, 0xB5, 0xF9, 0xB9, 0x27, 0x6A, 0x4D, 0xE4, 0xA6, 0x72, 0x9A, 0xC9, 0x09, 0x78,
				0x65, 0x2F, 0x8A, 0x05, 0x21, 0x0F, 0xE1, 0x24, 0x12, 0xF0, 0x82, 0x45, 0x35, 0x93, 0xDA, 0x8E,
				0x96, 0x8F, 0xDB, 0xBD, 0x36, 0xD0, 0xCE, 0x94, 0x13, 0x5C, 0xD2, 0xF1, 0x40, 0x46, 0x83, 0x38,
				0x66, 0xDD, 0xFD, 0x30, 0xBF, 0x06, 0x8B, 0x62, 0xB3, 0x25, 0xE2, 0x98, 0x22, 0x88, 0x91, 0x10,
				0x7E, 0x6E, 0x48, 0xC3, 0xA3, 0xB6, 0x1E, 0x42, 0x3A, 0x6B, 0x28, 0x54, 0xFA, 0x85, 0x3D, 0xBA,
				0x2B, 0x79, 0x0A, 0x15, 0x9B, 0x9F, 0x5E, 0xCA, 0x4E, 0xD4, 0xAC, 0xE5, 0xF3, 0x73, 0xA7, 0x57,
				0xAF, 0x58, 0xA8, 0x50, 0xF4, 0xEA, 0xD6, 0x74, 0x4F, 0xAE, 0xE9, 0xD5, 0xE7, 0xE6, 0xAD, 0xE8,
				0x2C, 0xD7, 0x75, 0x7A, 0xEB, 0x16, 0x0B, 0xF5, 0x59, 0xCB, 0x5F, 0xB0, 0x9C, 0xA9, 0x51, 0xA0,
				0x7F, 0x0C, 0xF6, 0x6F, 0x17, 0xC4, 0x49, 0xEC, 0xD8, 0x43, 0x1F, 0x2D, 0xA4, 0x76, 0x7B, 0xB7,
				0xCC, 0xBB, 0x3E, 0x5A, 0xFB, 0x60, 0xB1, 0x86, 0x3B, 0x52, 0xA1, 0x6C, 0xAA, 0x55, 0x29, 0x9D,
				0x97, 0xB2, 0x87, 0x90, 0x61, 0xBE, 0xDC, 0xFC, 0xBC, 0x95, 0xCF, 0xCD, 0x37, 0x3F, 0x5B, 0xD1,
				0x53, 0x39, 0x84, 0x3C, 0x41, 0xA2, 0x6D, 0x47, 0x14, 0x2A, 0x9E, 0x5D, 0x56, 0xF2, 0xD3, 0xAB,
				0x44, 0x11, 0x92, 0xD9, 0x23, 0x20, 0x2E, 0x89, 0xB4, 0x7C, 0xB8, 0x26, 0x77, 0x99, 0xE3, 0xA5,
				0x67, 0x4A, 0xED, 0xDE, 0xC5, 0x31, 0xFE, 0x18, 0x0D, 0x63, 0x8C, 0x80, 0xC0, 0xF7, 0x70, 0x07
			];
			return data[index];
		}
	}
}

var utils = {
	copyArray: function(array)
	{
		var temp = []
		for (var i = 0; i < array.length; i++)
		{
			temp.push(array[i]);
		}
		return temp;
	}
}

class AES{
	Nb;
	key; Nr; expansion_key;
	mode; initial_vector;
	notif;
	typeof_source_data; cache_length;

	
	// Supported mode 					: "ECB" or "CBC"
	// Length of key 						: 16, 24 or 32 chars of String or elements Array one dimension
	// Length of initial_vector : 16 chars of String or elements Array one dimension
	constructor(mode = 'CBC', key = '!@#qwe1234567890', initial_vector = '!@#qwe1234567890')
	{
		this.notif = {status : false, msg : ''};
		this.cache_length = [];
		this.Nb = 4;
		this.setMode(mode.toUpperCase());
		this.setKey(key);
		if (mode.toUpperCase() == 'CBC')
		{
			this.setInitialVector(initial_vector);
		}
	}

	getNotification()
	{
		return this.notif;
	}

	setKey(key)
	{
		try
		{
			var temp_key = [];
			if (key.length != 16 ^ key.length != 24 ^ key.length != 32)
			{
				throw 'Invalid key. The length of Key must be 16, 24 or 32 chars of String or elements of Array!';
			}
			if (typeof key == 'string')
			{
				for (var i = 0; i < key.length; i++)
				{
					var char_code = key.charCodeAt(i);
					if (char_code > 255)
					{
						throw 'Unsupported chars on String. Please use ASCII charset for Key String!';
					}
					temp_key.push(char_code);
				}
			}
			if (typeof key == 'object')
			{
				for (var i = 0; i < key.length; i++)
				{
					var code = key[i];
					if (typeof code != 'number' || Math.floor(code) != code || code < 0 || 255 < code)
					{
						throw 'Unsupported elements on Array. Please use index number of ASCII Code for elements of Array!';
					}
					temp_key.push(code);
				}
			}
			if (temp_key == [])
			{
				throw 'Unsupported Key.';
			}
			this.key = temp_key;
			this.setNumberRotation(temp_key);
			this.setExpansionKey(temp_key);

			this.notif.ststus = true;
			this.notif.msg = 'Success set the Key.';
			console.log(this.notif.msg);
			return this.notif.status;
		}
		catch(error)
		{
			this.notif.status = false;
			this.notif.msg = error;
			console.error(this.notif.msg);
			return this.notif.status;
		}		
	}

	getKey()
	{
		return this.key;
	}

	setNumberRotation(key)
	{
		switch (key.length)
		{
			case 16 : this.Nr = 10; break;
			case 24 : this.Nr = 12; break;
			case 32 : this.Nr = 14; break;
			default : this.Nr = 0; break;
		}
	}

	setExpansionKey(key)
	{
		const Nk = Math.floor(key.length/4);
		var expansion_key = [];
		var key_schadule = [];

		// generate first expansion_key (4*Nk) from key string
		var i = 0;
		do
		{
			for (var j = 0; j < 4; j++)
			{
				key_schadule.push(key[4*i+j]);
			}
			expansion_key.push(key_schadule);
			key_schadule = [];
			i++;
		} while(i < Nk);

		// continue generate expansion_key
		i = Nk;
		while (i < this.Nb * (this.Nr + 1))
		{
			key_schadule = utils.copyArray(expansion_key[i-1]);

			if (i % Nk == 0) 
			{
				this.tRotWord(key_schadule);
				this.tSubWord(key_schadule);
				this.tXOR(key_schadule, RINJDAEL_PRESET.RCON(Math.floor(i/Nk)-1));
			}
			else if (Nk > 6 && i % Nk == 4)
			{
				this.tSubWord(key_schadule);
			}

			this.tXOR(key_schadule, expansion_key[i-Nk]);
			expansion_key.push(key_schadule);
			key_schadule = [];
			i++;
		}
		this.expansion_key = expansion_key;
	}

	setMode(mode)
	{
		try
		{
			switch (mode.toUpperCase())
			{
				case 'ECB' : case 'CBC' :
						this.mode = mode.toUpperCase();
						this.notif.status = true;
						this.notif.msg = 'Success set the Mode.';
						console.log(this.notif.msg);
						return this.notif.status;
				default :
						throw '\"'+mode+'\" is not supported Mode. Please select Mode : \"ECB\" or \"CBC\"!';
			}			
		}
		catch(error)
		{
			this.notif.status = false;
			this.notif.msg = error;
			console.error(this.notif.msg);
			return this.notif.status;
		}
	}

	getMode()
	{
		return this.mode;
	}

	setInitialVector(initial_vector)
	{
		try
		{
			var temp_initial_vector = [];
			if (this.getMode() != 'CBC')
			{
				throw 'Your selected Mode (\"'+this.getMode()+'\") doesn\'t need Initial Vector';
			}
			if (initial_vector.length != 4*this.Nb)
			{
				throw 'Length of Initial Vector must be 16 char String or elements of Array!';
			}
			if (typeof initial_vector == 'string')
			{
				for (var i = 0; i < initial_vector.length; i++)
				{
					var char_code = initial_vector.charCodeAt(i);
					if (char_code > 255)
					{
						throw 'Unsupported chars on String. Please use ASCII charset for Initial Vector String!';
					}
					temp_initial_vector.push(char_code);
				}
			}
			if (typeof initial_vector == 'object')
			{
				for (var i = 0; i < initial_vector.length; i++)
				{
					var code = initial_vector[i];
					if (typeof code != 'number' || Math.floor(code) != code || code < 0 || 255 < code)
					{
						throw 'Unsupported elements on Array. Please use index number of ASCII Code for elements of Array!';
					}
					temp_initial_vector.push(code);
				}
			}
			if (temp_initial_vector == [])
			{
				throw 'Unsupported Initial Vector.';
			}
			this.initial_vector = temp_initial_vector;
			this.notif.status = true;
			this.notif.msg = 'Success set the Initial Vector';
			console.log(this.notif.msg);
			return this.notif.status;
		}
		catch(error)
		{
			this.notif.status = false;
			this.notif.msg = error;
			console.error(this.notif.msg);
			return this.notif.status;
		}
	}

	getInitialVector()
	{
		return this.initial_vector;
	}
	
	getAllStateFrom(source_data){
		var all_state = [];
		var state = [];
		var x = 0, y = 0;
		if(this.typeof_source_data == 'object' || this.typeof_source_data == 'string')
		{
			for (var i = 0; i < source_data.length; i++) 
			{
				// This is for rebulid as original Array
				this.cache_length[i] = source_data[i].length;

				for (var j = 0; j < source_data[i].length; j++)
				{					
					var e = source_data[i][j];
					// This is for Array with elements are index number of ASCII Charset
					if (typeof e == 'number' && Math.floor(e) == e  && 0 <= e && e <= 255)
					{
						state.push(e); y++;
					}
					// This is for String with ASCII Charset
					else if (typeof e == 'string' && e.length == 1 && e.charCodeAt(0) <= 255)
					{
						state.push(e.charCodeAt(0)); y++;
					}
					// This is for invalid Source Data
					else
					{
						throw 'Invalid Source Data.';
					}

					if (y == (this.Nb * 4))
					{
						all_state.push(state);
						state = [];
						y = 0;
					}
				}
			}
			if (y > 0)
			{
				all_state.push(state);
			}
		}
		else 
		{
			all_state.push(state);
		}
		return all_state;
	}

	rebuild(all_state)
	{
		var result;
		if (this.typeof_source_data == 'object')
		{
			result = [];
			var row = [];
			var m = 0;
			var n = 0;
			for (var i = 0; i < all_state.length; i++) {
				for (var j = 0; j < all_state[i].length; j++) {
					row.push(all_state[i][j]); n++;
					if (n == this.cache_length[m]) {
						result.push(row); m++;
						row = [];
						n = 0;
					}
				}
			}
		}
		else if (this.typeof_source_data == 'string')
		{
			result = "";
			for (var i = 0; i < all_state.length; i++) {
				for (var j = 0; j < all_state[i].length; j++) {
						result += String.fromCharCode(all_state[i][j]);
				}
			}
		}
		else
		{
			throw 'Type of Source Data is not supported.'
		}
		return result;
	}

	encrypt(source_data)
	{
		try{
			this.typeof_source_data = typeof source_data;
			if (this.typeof_source_data == 'string')
			{
				source_data = this.addPadding(source_data);
			}
			// console.log(source_data);
			const all_state = this.getAllStateFrom(source_data);
			var state = [];
			var cipher_blocks = [];

			// Sequance Process
			for (var i = 0; i < all_state.length; i++) 
			{
				state = utils.copyArray(all_state[i]);
				if (all_state[i].length ==  (this.Nb*4))
				{
					switch(this.getMode())
					{
						case 'ECB' :
								this.encryptModeECB(state);
								break;

						case 'CBC' :
								var vector = [];
								switch (i)
								{
									case 0 :
											vector = this.getInitialVector(); break;
									default :
											vector = cipher_blocks[i-1]; break;
								}
								this.encryptModeCBC(state,vector);
								break;

						default :
								return null;
					}			
					cipher_blocks[i] = state;
				} 
				else 
				{
					cipher_blocks[i] = state;
				}
			}
			var result;
			if (this.typeof_source_data == 'string')
			{
				result = this.rebuild(cipher_blocks);
				result = btoa(result); // Encode to base64
			}
			else if (this.typeof_source_data == 'object')
			{
				result = this.rebuild(cipher_blocks);
			}
			else{
				throw 'Invalid Source Data.'
			}
			this.notif.status = true;
			this.notif.msg = 'Success Encrypt Source Data.';
			console.log(this.notif.msg);
			return result;
		}
		catch(error)
		{
			this.notif.status = false;
			this.notif.msg = error;
			console.error(this.notif.msg);
			return this.notif.status;
		}
	}

	// Encrypt Mode ECB (Electronic Code Book)
	encryptModeECB(state)
	{
		var r = 0;
		this.tAddRoundKey(state,r);
		for (r = 1; r < this.Nr; r++) 
		{
			this.tSubByte(state);
			this.tShiftRows(state);
			this.tMixColumn(state);
			this.tAddRoundKey(state,r);
		}
		this.tSubByte(state);
		this.tShiftRows(state);
		this.tAddRoundKey(state,r);
	}

	// Encrypt Mode CBC (Cipher Block Chaining)
	encryptModeCBC(state, vector)
	{
		var r = 0;
		this.tXOR(state,vector);
		this.tAddRoundKey(state,r);
		for (r = 1; r < this.Nr; r++) 
		{
			this.tSubByte(state);
			this.tShiftRows(state);
			this.tMixColumn(state);
			this.tAddRoundKey(state,r);
		}
		this.tSubByte(state);
		this.tShiftRows(state);
		this.tAddRoundKey(state,r);
	}

	decrypt(source_data)
	{
		try
		{
			this.typeof_source_data = typeof source_data ;
			if (this.typeof_source_data == 'string')
			{
				source_data = atob(source_data); // Decode from base64
			}
			const all_state = this.getAllStateFrom(source_data);
			var state;
			var decipher_blocks = [];

			// Sequence Process
			for (var i = 0; i < all_state.length; i++) 
			{
				state = utils.copyArray(all_state[i]);
				if (all_state[i].length == (this.Nb*4))
				{
					switch(this.mode)
					{
						case 'ECB' :
								this.decryptModeECB(state);
								break;

						case 'CBC' :
								var vector = [];
								switch(i)
								{
									case 0 : 
											vector = this.getInitialVector(); break;
									default :
											vector = all_state[i-1]; break;
								}
								this.decryptModeCBC(state,vector);
								break;

						default :
								return null;
					}
					decipher_blocks[i] = state;
				}
				else
				{
					decipher_blocks[i] = all_state[i];
				}
			}
			var result;
			if (this.typeof_source_data == 'string')
			{
				result = this.removePadding(this.rebuild(decipher_blocks));
			}
			else if (this.typeof_source_data == 'object')
			{
				result = this.rebuild(decipher_blocks);
			}
			else{
				throw 'Invalid Source Data.'
			}
			this.notif.status = true;
			this.notif.msg = 'Success Decrypt Source Data.';
			console.log(this.notif.msg);
			return result;
		}
		catch(error)
		{
			this.notif.status = false;
			this.notif.msg = error;
			console.error(this.notif.msg);
			return this.notif.status;
		}
	}

	// Decrypt Mode ECB (Electronic Code Book)
	decryptModeECB(state)
	{
		var r = this.Nr;
		this.tAddRoundKey(state,r);
		for (r = this.Nr-1; r > 0 ; r--) 
		{
			this.tInversShiftRows(state);
			this.tInversSubByte(state);
			this.tAddRoundKey(state,r);
			this.tInversMixColumn(state);
		}
		this.tInversShiftRows(state);
		this.tInversSubByte(state);
		this.tAddRoundKey(state,r);
	}

	// Decrypt Mode CBC (Cipher Block Chaining)
	decryptModeCBC(state,vector)
	{
		var r = this.Nr;
		this.tAddRoundKey(state,r);
		for (r = this.Nr-1; r > 0 ; r--) 
		{
			this.tInversShiftRows(state);
			this.tInversSubByte(state);
			this.tAddRoundKey(state,r);
			this.tInversMixColumn(state);
		}
		this.tInversShiftRows(state);
		this.tInversSubByte(state);
		this.tAddRoundKey(state,r);
		this.tXOR(state,vector);
	}

	tAddRoundKey(state, r)
	{
		var j = 0;
		for (var i = 0; i < state.length; i++) {
			state[i] = state[i] ^ this.expansion_key[r*4+Math.floor(i/4)][j++%4];
		}
	}	

	tSubByte(state)
	{
		for (var i = 0; i < state.length; i++) {
			state[i] = RINJDAEL_PRESET.SBOX(state[i]);
		}
	}

	tInversSubByte(state)
	{
		for (var i = 0; i < state.length; i++) {
			state[i] = RINJDAEL_PRESET.INVERS_SBOX(state[i]);
		}
	}

	tShiftRows(state)
	{
		var temp = 0;
		for (var i = 1; i < this.Nb; i++) {
			for (var j = 0; j < i; j++) {
				var k = 0;
				temp = state[i+k*this.Nb];
				for (k = 0; k < this.Nb-1; k++) {
					state[i+k*this.Nb] = state[i+(k+1)*4];
				}
				state[i+k*this.Nb] = temp;
			}
		}
	}

	tInversShiftRows(state)
	{
		var temp_value = 0;
		for (var i = 1; i < this.Nb; i++) {
			for (var j = 0; j < i; j++) {
				var k = this.Nb-1;
				temp_value = state[i+k*this.Nb];
				for (k = this.Nb-1; k > 0; k--) {
					state[i+k*this.Nb] = state[i+(k-1)*this.Nb];
				}
				state[i+k*this.Nb] = temp_value;
			}
		}
	}

	tMixColumn(state)
	{
		var result = [];
		var k = 0;
		for (var i = 0; i < state.length; i+=4) 
		{
			for (var j = 0; j < 4; j++) 
			{
				result[k++] = 
							// 0x## * 0x02
							this.tMultiGF(state[(i+0+j)%4+i], 0x02)
							// 0x## * 0x03
						^ this.tMultiGF(state[(i+1+j)%4+i], 0x03)
							// 0x## * 0x01
						^ this.tMultiGF(state[(i+2+j)%4+i], 0x01)
							// 0x## * 0x01
						^ this.tMultiGF(state[(i+3+j)%4+i], 0x01);
			}
		}
		for (var i = 0; i < result.length; i++)
		{
			state[i] = result[i];
		}
	}

	tInversMixColumn(state)
	{
		var result = [];
		var k = 0;
		for (var i = 0; i < state.length; i+=4) 
		{
			for (var j = 0; j < 4; j++) 
			{
				result[k++] = 
							// 0x## * 0x0e
							this.tMultiGF(state[(i+0+j)%4+i], 0x0e)
							// 0x## * 0x0b
						^ this.tMultiGF(state[(i+1+j)%4+i], 0x0b)
							// 0x## * 0x0d
						^ this.tMultiGF(state[(i+2+j)%4+i], 0x0d)
							// 0x## * 0x09
						^ this.tMultiGF(state[(i+3+j)%4+i], 0x09);
			}
		}
		for (var i = 0; i < result.length; i++)
		{
			state[i] = result[i];
		}
	}

	tRotWord(key_schadule)
	{
		var temp = key_schadule[0];
		var i = 0;
		while (i < key_schadule.length-1)
		{
			key_schadule[i] = key_schadule[i+1];
			i++;
		}
		key_schadule[i] = temp;
	}

	tSubWord(key_schadule)
	{
		this.tSubByte(key_schadule);
	}

	tXOR(array0, array1)
	{
		if (array0.length == array1.length)
		{
			for (var i = 0; i < array0.length; i++)
			{
				array0[i] ^= array1[i];
			}
		}
		else 
		{
			console.log('Both of length is different');
		}
	}
	tMultiGF(numb1, numb2) 
	{
		if (numb1 == 0 || numb2 == 0) return 0;
		var t = RINJDAEL_PRESET.GF_Field.L(numb1) + RINJDAEL_PRESET.GF_Field.L(numb2);
		if (t > 255) t = t - 255;
		return RINJDAEL_PRESET.GF_Field.E(t);
	}

	addPadding(text)
	{
		if (typeof text != 'string')
		{
			return null;
		}
		var x = this.Nb*4-(text.length%(this.Nb*4));
		for (var i = 0; i < x; i++)
		{
			text += String.fromCharCode(x);
		}
		return text;
	}

	removePadding(text)
	{
		if (typeof text != 'string')
		{
			return null;
		}
		var x = text.length-1;
		var last_value = text.charCodeAt(x);
		var counter = 0;
		while (text.charCodeAt(x-1) == last_value)
		{
			x--;
			counter++;
		}
		if (text.charCodeAt(x) == counter+1)
		{
			text = text.substring(0, text.length-(counter+1));
		}
		return text;
	}
}