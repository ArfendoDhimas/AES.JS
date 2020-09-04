//Author : https://github.com/ArfendoDhimas

const RINJDAEL_PRESET = {
	SBOX: function(index)
	{
		const temp = [0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x01, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76,
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
									0x8c, 0xa1, 0x89, 0x0d, 0xbf, 0xe6, 0x42, 0x68, 0x41, 0x99, 0x2d, 0x0f, 0xb0, 0x54, 0xbb, 0x16];
		return temp[index];
	},

	INVERS_SBOX: function(index)
	{
		const temp = [0x52, 0x09, 0x6a, 0xd5, 0x30, 0x36, 0xa5, 0x38, 0xbf, 0x40, 0xa3, 0x9e, 0x81, 0xf3, 0xd7, 0xfb,
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
									0x17, 0x2b, 0x04, 0x7e, 0xba, 0x77, 0xd6, 0x26, 0xe1, 0x69, 0x14, 0x63, 0x55, 0x21, 0x0c, 0x7d];
		return temp[index];
	},

	RCON: function(index,j)
	{
		const temp = [[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]];
		return temp[index][j];
	}
}

class AES{
	constructor(mode = 'ECB', string_key = '1234567890abcdef', initial_vector = '1234567890abcdef')
	{
		this.Nb = 4; //Standar untuk semua panjang kunci
		this.setKey(string_key);
		this.setMode(mode);
		if (mode == 'CBC')
		{
			this.setInitialVector(initial_vector);
		}
	}

	setKey(string_key)
	{
		switch(string_key.length)
		{
			case 16: case 24 : case 32 :
				this.key_length = string_key.length;
				break;
			default :
				this.key_length = 0;
				break;
		}
		try 
		{
			if (this.key_length == 0)
			{
				throw 'Invalid key, key must be 128bits, 192bits or 256bits.';
			}
			this.string_key = string_key;
			this.Nr = this.getNumberRotation();
			this.expansion_key = this.getExpansionKey();
		} 
		catch (error) 
		{
			console.log(error);
			return error;
		}
	}

	getNumberRotation()
	{
		switch (this.key_length)
		{
			case 16 : return 10;
			case 24 : return 12;
			case 32 : return 14;
			default : return 0; 
		}
	}

	getExpansionKey()
	{
		const Nk = Math.floor(this.key_length/4);
		const Nb = this.Nb;
		const Nr = this.Nr;

		let expansion_key = [];
		let key_schadule = [0,0,0,0];
		let r = this.key_length - this.string_key.length;

		var a = Nk-1;
		for (var i = this.string_key.length-1; i >= 0 ; i--) {
			key_schadule[(i+r)%4] = this.string_key.charCodeAt(i);
			if ((i+r)%4 == 0) 
			{
				expansion_key[a--] = key_schadule;
				key_schadule = [0,0,0,0];
			}
		}
		var i = Nk;
		while (i < Nb*(Nr+1))
		{
			let temp = expansion_key[i-1];
			if (i % Nk == 0) 
			{
				const index_rcon = Math.floor(i/Nk-1);
				temp = this.getSubWord(this.getRotWord(temp));
				for (var j = 0; j < temp.length; j++) {
					temp[j] ^= RINJDAEL_PRESET.RCON(index_rcon,j);
				}
			}
			else if (Nk > 6 && i % Nk == 4)
			{
				temp = this.tranformSubByte(temp);
			}
			let key_schadule = [0,0,0,0];
			for (var j = 0; j < temp.length; j++) {
				key_schadule[j] = temp[j] ^ expansion_key[i-Nk][j];
			}
			expansion_key[i++] = key_schadule;
		}
		return expansion_key;
	}

	getKey()
	{
		return this.string_key;
	}

	setMode(mode)
	{
		this.mode = mode;
	}
	getMode()
	{
		return this.mode;
	}

	setInitialVector(initial_vector)
	{
		var temp_iv = [];
		for (var i = 0; i < initial_vector.length; i++)
		{
			temp_iv.push(initial_vector.charCodeAt(i));
		}
		this.initial_vector = temp_iv;
	}

	getInitialVector()
	{
		return this.initial_vector;
	}
	
	getAllStateFrom(source_data){
		this.type_of_source_data = typeof source_data;
		this.M = source_data.length;								// M baris
		if(this.type_of_source_data == 'object'){
			try{
				this.N = source_data[0].length;					// N kolom
			} catch(e){
				this.N = 0; 														// N kolom
			}
		} 
		else if (this.type_of_source_data == 'string')
		{
			this.N = 1;																// N kolom
		}
		else
		{
			this.N = 0;																// N kolom
		}

		let all_state = [];
		let state = [];
		var x = 0, y = 0;
		if(this.type_of_source_data == 'object' || this.type_of_source_data == 'string')
		{
			var temp_data = source_data;
			if(this.type_of_source_data == 'string' && this.type_process == 'decrypt')
			{
				temp_data = atob(source_data); //decode base64
				this.M = temp_data.length;
			}
			for (var i = 0; i < this.M; i++) 
			{
				for (var j = 0; j < this.N; j++)
				{					
					if (typeof temp_data[i][j] != 'undefined')
					{
						state[y++] = (typeof temp_data[i][j] == 'string') ? temp_data[i][j].charCodeAt(0) : parseInt(temp_data[i][j]);
					}

					if (y == (this.Nb * 4))
					{
						all_state[x++] = state;
						state = [];
						y = 0;
					}
				}
			}
			if (y > 0)
			{
				if (this.type_of_source_data == 'string') 
				{
					// Add Padding to the last state
					this.addPadding(state);
				}
				all_state[x++] = state;
			}
		}
		else 
		{
			all_state[0] = state;
		}
		return all_state;
	}

	getStateCol(state,col)
	{
		let result = [];
		let Nb = this.Nb;
		for (var i = 0; i < Nb; i++) {
			result[i] = state[col*Nb+i];
		}
		return result;
	}

	getStateRow(state,row)
	{
		let result = [];
		for (var i = 0; i < 4; i++) {
			result[i] = state[row+i*4];
		}
		return result;
	}

	getRebuild(state)
	{
		let cipher;
		let temp;
		let m, n;
		if (this.type_of_source_data == 'object')
		{
			cipher = [];
			temp = [];
			m = 0;
			n = 0;
		}
		else if (this.type_of_source_data == 'string')
		{
			cipher = "";
		}
		else
			return null;

		for (var i = 0; i < state.length; i++) {
			if (i == state.length-1 && this.type_of_source_data == 'string')
			{
				// Remove Padding when encrypt
				this.removePadding(state[i]);
			}
			for (var j = 0; j < state[i].length; j++) {
				if (this.type_of_source_data == 'object')
				{
					temp[n++] = state[i][j];
					if (n == this.N) {
						cipher[m++] = temp;
						temp = [];
						n = 0;
					}
				}
				else if (this.type_of_source_data == 'string')
					cipher += String.fromCharCode(state[i][j]); 
			}
		}
		
		return cipher;
	}

	// this still use ECB Mode
	encrypt(source_data)
	{
		this.type_process = 'encrypt';
		const all_state = this.getAllStateFrom(source_data);
		let state = [];
		let result = [];
		// sequance process
		for (var i = 0; i < all_state.length; i++) 
		{
			state = all_state[i];
			if (all_state[i].length ==  (this.Nb*4))
			{
				switch(this.getMode())
				{
					case 'ECB' :
						this.#encryptModeECB(state);
						break;
					case 'CBC' :
						let vector = [];
						if (i == 0)
							vector = this.getInitialVector();
						else
							vector = result[i-1];
						console.log(vector);
						this.#encryptModeCBC(state,vector);
						break;
					default :
						return null;
				}			
				result[i] = state;
			} else {
				result[i] = state;
			}
		}
		// Encode to base64 for type of source_data is string
		return (this.type_of_source_data == 'string')?btoa(this.getRebuild(result)):this.getRebuild(result);
	}

	// Encrypt Mode ECB (Electronic Code Book)
	#encryptModeECB(state)
	{
		let r = 0;
		this.transformAddRoundKey(state,r);
		for (r = 1; r < this.Nr; r++) 
		{
			this.tranformSubByte(state);
			this.tranformShiftRows(state);
			this.transformMixColumn(state);
			this.transformAddRoundKey(state,r);
		}
		this.tranformSubByte(state);
		this.tranformShiftRows(state);
		this.transformAddRoundKey(state,r);
	}

	// Encrypt Mode CBC (Cipher Block Chaining)
	#encryptModeCBC(state, vector)
	{
		let r = 0;
		this.operationXORForArray(state,vector);
		this.transformAddRoundKey(state,r);
		for (r = 1; r < this.Nr; r++) 
		{
			this.tranformSubByte(state);
			this.tranformShiftRows(state);
			this.transformMixColumn(state);
			this.transformAddRoundKey(state,r);
		}
		this.tranformSubByte(state);
		this.tranformShiftRows(state);
		this.transformAddRoundKey(state,r);
	}

	decrypt(source_data)
	{
		this.type_process = 'decrypt';
		const all_state = this.getAllStateFrom(source_data);
		let result = [];
		let temp;
		const Nb = this.Nb;
		for (var i = 0; i < all_state.length; i++) 
		{
			if (all_state[i].length < (this.Nb*4))
			{
				result[i] = all_state[i];
				continue;
			}
			let r = this.Nr;
			// Begin Decrypt
			temp = this.transformAddRoundKey(all_state[i],r);
			for (r = this.Nr-1; r > 0 ; r--) 
			{
				temp = this.tranformInversShiftRows(temp);
				temp = this.tranformInversSubByte(temp);
				temp = this.transformAddRoundKey(temp,r);
				temp = this.transformInversMixColumn(temp);
			}
			temp = this.tranformInversShiftRows(temp);
			temp = this.tranformInversSubByte(temp);
			temp = this.transformAddRoundKey(temp,r);
			// End Decrypt
			result[i] = temp;
		}
		return this.getRebuild(result);
	}

	tranformSubByte(state)
	{
		for (var i = 0; i < state.length; i++) {
			state[i] = RINJDAEL_PRESET.SBOX(state[i]);
		}
		// return state;
	}

	tranformInversSubByte(state)
	{
		for (var i = 0; i < state.length; i++) {
			state[i] = RINJDAEL_PRESET.INVERS_SBOX(state[i]);
		}
		return state;
	}

	tranformShiftRows(state)
	{
		let temp = 0;
		const Nb = this.Nb;

		for (var i = 1; i < Nb; i++) {
			for (var j = 0; j < i; j++) {
				var k = 0;
				temp = state[i+k*Nb];
				for (k = 0; k < Nb-1; k++) {
					state[i+k*Nb] = state[i+(k+1)*4];
				}
				state[i+k*Nb] = temp;
			}
		}
		// return state;
	}

	tranformInversShiftRows(state)
	{
		let temp = 0;
		const Nb = this.Nb;

		for (var i = 1; i < Nb; i++) {
			for (var j = 0; j < i; j++) {
				var k = Nb-1;
				temp = state[i+k*Nb];
				for (k = Nb-1; k > 0; k--) {
					state[i+k*Nb] = state[i+(k-1)*Nb];
				}
				state[i+k*Nb] = temp;
			}
		}
		return state;
	}

	transformMixColumn(state)
	{
		let result = [];
		const Nb = this.Nb;
		var k = 0;
		for (var i = 0; i < state.length; i+=4) 
		{
			for (var j = 0; j < 4; j++) 
			{
				result[k++] = 
							// 0xQQ*0x02
							((state[(i+0+j)%4+i]
									*0x02)%256^((state[(i+0+j)%4+i]>>7==1)?0x1b:0))
							// 0xQQ*0x03
						^ (((state[(i+1+j)%4+i]
									*0x02)%256^((state[(i+1+j)%4+i]>>7==1)?0x1b:0))
									^state[(i+1+j)%4+i])
							// 0xQQ*0x01
						^ state[(i+2+j)%4+i]
							// 0xQQ*0x01
						^ state[(i+3+j)%4+i];
			}
		}
		for (var i = 0; i < result.length; i++)
		{
			state[i] = result[i];
		}
		// return result;
	}

	transformInversMixColumn(state)
	{
		let result = [];
		const Nb = this.Nb;
		var k = 0;
		for (var i = 0; i < state.length; i+=4) 
		{
			for (var j = 0; j < 4; j++) 
			{
				result[k++] = 
							// 0xQQ*0x0e
							((((((((state[(i+0+j)%4+i]
													*0x02)%256^((state[(i+0+j)%4+i]>>7==1)?0x1b:0))
													^state[(i+0+j)%4+i])
													*0x02)%256^(((((state[(i+0+j)%4+i]*0x02)%256^((state[(i+0+j)%4+i]>>7==1)?0x1b:0))^state[(i+0+j)%4+i])>>7==1)?0x1b:0))
													^state[(i+0+j)%4+i])
													*0x02)%256^((((((((state[(i+0+j)%4+i]*0x02)%256^((state[(i+0+j)%4+i]>>7==1)?0x1b:0))^state[(i+0+j)%4+i])*0x02)%256^(((((state[(i+0+j)%4+i]*0x02)%256^((state[(i+0+j)%4+i]>>7==1)?0x1b:0))^state[(i+0+j)%4+i])>>7==1)?0x1b:0))^state[(i+0+j)%4+i])>>7==1)?0x1b:0))
							// 0xQQ*0x0b
						^ ((((((((state[(i+1+j)%4+i]
													*0x02)%256^((state[(i+1+j)%4+i]>>7==1)?0x1b:0))
													*0x02)%256^((((state[(i+1+j)%4+i]*0x02)%256^((state[(i+1+j)%4+i]>>7==1)?0x1b:0))>>7==1)?0x1b:0))
													^state[(i+1+j)%4+i])
													*0x02)%256^(((((((state[(i+1+j)%4+i]*0x02)%256^((state[(i+1+j)%4+i]>>7==1)?0x1b:0))*0x02)%256^((((state[(i+1+j)%4+i]*0x02)%256^((state[(i+1+j)%4+i]>>7==1)?0x1b:0))>>7==1)?0x1b:0))^state[(i+1+j)%4+i])>>7==1)?0x1b:0))
													^state[(i+1+j)%4+i])
							// 0xQQ*0x0d
						^ ((((((((state[(i+2+j)%4+i]
													*0x02)%256^((state[(i+2+j)%4+i]>>7==1)?0x1b:0))
													^state[(i+2+j)%4+i])
													*0x02)%256^(((((state[(i+2+j)%4+i]*0x02)%256^((state[(i+2+j)%4+i]>>7==1)?0x1b:0))^state[(i+2+j)%4+i])>>7==1)?0x1b:0))
													*0x02)%256^(((((((state[(i+2+j)%4+i]*0x02)%256^((state[(i+2+j)%4+i]>>7==1)?0x1b:0))^state[(i+2+j)%4+i])*0x02)%256^(((((state[(i+2+j)%4+i]*0x02)%256^((state[(i+2+j)%4+i]>>7==1)?0x1b:0))^state[(i+2+j)%4+i])>>7==1)?0x1b:0))>>7==1)?0x1b:0))
													^state[(i+2+j)%4+i])
							// 0xQQ*0x09
						^ (((((((state[(i+3+j)%4+i]
													*0x02)%256^((state[(i+3+j)%4+i]>>7==1)?0x1b:0))						
													*0x02)%256^((((state[(i+3+j)%4+i]*0x02)%256^((state[(i+3+j)%4+i]>>7==1)?0x1b:0))>>7==1)?0x1b:0))
													*0x02)%256^((((((state[(i+3+j)%4+i]*0x02)%256^((state[(i+3+j)%4+i]>>7==1)?0x1b:0))*0x02)%256^((((state[(i+3+j)%4+i]*0x02)%256^((state[(i+3+j)%4+i]>>7==1)?0x1b:0))>>7==1)?0x1b:0))>>7==1)?0x1b:0))
													^state[(i+3+j)%4+i]);
			}
		}
		return result;
	}
	
	transformAddRoundKey(state, r)	//r for round
	{
		// let result = [];
		let j = 0;
		for (var i = 0; i < state.length; i++) {
			state[i] = state[i] ^ this.expansion_key[r*4+Math.floor(i/4)][j++%4];
		}
		// return result;
	}

	getRotWord(key_schadule)
	{
		let temp = [0,0,0,key_schadule[0]];
		for (var i = 0; i < temp.length-1; i++)
			temp[i] = key_schadule[i+1];
		return temp;
	}

	getSubWord(state)
	{
		let temp = [];
		for (var i = 0; i < state.length; i++) {
			temp[i] = RINJDAEL_PRESET.SBOX(state[i]);
		}
		return temp;
	}

	operationXORForArray(array0, array1)
	{
		console.log(array0);
		console.log(array1);
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

	addPadding(state)
	{
		var x = this.Nb*4-state.length;
		for (var i = 0; i < x; i++)
		{
			state.push(x);
		}
	}

	removePadding(state)
	{
		var x = state.length-1;
		var last_value = state[x];
		var counter = 0;
		while (state[x-1] == last_value)
		{
			state.pop();
			x--;
			counter++;
		}
		if (state[x] == counter+1)
			state.pop();
	}

	derajat_gf(decimal_number)
	{
		let result = 0;
		decimal_number >>= 1;
		while(decimal_number != 0)
		{
			decimal_number >>= 1;
			result +=1;
		}
		return result;
	}

	invers_perkalian_gf(decimal_number, mod = 0x1B) //0x1B = 27
	{
		if (decimal_number == 0)
			return 0;

		let v = mod;
		let g1 = 1;
		let g2 = 0;
		let j = this.derajat_gf(decimal_number) - 8;

		while(decimal_number != 1)
		{
			if(j < 0)
			{
				let temp = decimal_number; decimal_number = v; v = temp;
				temp = g1; g1 = g2; g2 = temp;
				j = -j; 
			}

			decimal_number ^= v << j;
			g1 ^= g2 << j;

			decimal_number %= 256;
			g1 %= 256;

			j = this.derajat_gf(decimal_number) - this.derajat_gf(v);
		}
		return g1
	}

}