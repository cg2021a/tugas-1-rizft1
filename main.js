function main() {
    /**
    * @type {HTMLCanvasElement} canvas
    */
    const canvas = document.getElementById('myCanvas');

    /**
     * @type {WebGLRenderingContext} gl
     */
    const gl = canvas.getContext('webgl');

    const objectKursiLeft = {
        leftColor_1 : [0.40, 0.85, 0.91],
        leftColor_2 : [0.4, 0.45, 0.52],
        leftColor_3 : [0.2, 0.2, 0.2],
        leftColor_4 : [0.2, 0.2, 0.2],
        pos_V1 : [-0.67269,0.25704],
        pos_W1 : [-0.62767,0.31855],
        pos_Z1 : [-0.53465,0.35756],
        pos_A2 : [-0.41612,0.36507],
        pos_B2 : [-0.30809,0.34556],
        pos_C2 : [-0.22406,0.28855],
        pos_D2 : [-0.21506,0.24803],
        pos_E2 : [-0.25215,0.19405],
        pos_F2 : [-0.34259,0.16251],
        pos_G2 : [-0.45663,0.15351],
        pos_H2 : [-0.56165,0.16251],
        pos_I2 : [-0.65168,0.21503],
        pos_J2 : [-0.6726,0.21974],
        pos_K2 : [-0.65808,0.18081],
        pos_L2 : [-0.63169,0.15112],
        pos_M2 : [-0.61388,0.14057],
        pos_N2 : [-0.56571,0.11747],
        pos_O2 : [-0.54856,0.11286],
        pos_P2 : [-0.46741,0.099],
        pos_Q2 : [-0.4,0.1],
        pos_R2 : [-0.34534,0.11022],
        pos_S2 : [-0.32819,0.11418],
        pos_T2 : [-0.27739,0.13595],
        pos_U2 : [-0.25957,0.1465],
        pos_V2 : [-0.23318,0.16564],
        pos_W2 : [-0.21536,0.20259],
        pos_Z2 : [-0.21093,0.2257],
        pos_A3 : [-0.62251,0.10138],
        pos_B3 : [-0.56131,-0.24302],
        pos_C3 : [-0.5871,-0.2372],
        pos_D3 : [-0.64283,0.10389],
        pos_E3 : [-0.54716,-0.03254],
        pos_F3 : [-0.53226,-0.02909],
        pos_G3 : [-0.36414,-0.02755],
        pos_H3 : [-0.34963,-0.03637],
        pos_I3 : [-0.26846,0.09973],
        pos_J3 : [-0.34001,-0.24053],
        pos_K3 : [-0.31339,-0.2372],
        pos_L3 : [-0.25,0.1],
        pos_M3 : [-0.44198,0.2765],
        
    };

    const objectKursiRight = {
       
        rightColor_1 : [0.40, 0.85, 0.91],
        rightColor_2 : [0.4, 0.45, 0.52],
        rightColor_3 : [0.2, 0.2, 0.2],
        rightColor_4 : [0.2, 0.2, 0.2],
        pos_S : [0.39907,0.3177],
        pos_E : [0.1244,0.28732],
        pos_F : [0.18517,0.37482],
        pos_G : [0.28239,0.41979],
        pos_H : [0.3857,0.43559],
        pos_I : [0.48293,0.43316],
        pos_J : [0.5595,0.41736],
        pos_K : [0.66159,0.36145],
        pos_L : [0.68589,0.32013],
        pos_M : [0.67374,0.26422],
        pos_N : [0.62703,0.22647],
        pos_O : [0.55528,0.19416],
        pos_P : [0.38084,0.16821],
        pos_Q : [0.22527,0.18644],
        pos_R : [0.13168,0.23468],
        pos_S : [0.39907,0.3177],
        pos_T : [0.69477,0.27407],
        pos_U : [0.68814,0.22983],
        pos_V : [0.65828,0.18227],
        pos_W : [0.62666,0.15421],
        pos_Z : [0.60408,0.14246],
        pos_G1 : [0.63904,0.09994],
        pos_H1 : [0.54323,-0.27467],
        pos_I1 : [0.5268,-0.28757],
        pos_K1 : [0.61364,0.09968],
        pos_A1 : [0.5667,0.12901],
        pos_B1 : [0.54507,0.12095],
        pos_C1 : [0.44465,0.10555],
        pos_D1 : [0.36016,0.10672],
        pos_E1 : [0.31322,0.11259],
        pos_F1 : [0.2948,0.11356],
        pos_L1 : [0.18414,0.16187],
        pos_M1 : [0.15949,0.18417],    
        pos_N1 : [0.17475,0.13136],
        pos_O1 : [0.2698,-0.22655],
        pos_P1 : [0.24868,-0.23477],
        pos_Q1 : [0.15128,0.13371],
        pos_R1 : [0.31083,-0.01466],
        pos_S1 : [0.33055,-0.01343],
        pos_T1 : [0.52472,-0.03377],
        pos_U1 : [0.54014,-0.03932],

    };

    const vertices = [
    // GAMBAR KIRI
        ...objectKursiLeft.pos_V1, ...objectKursiLeft.leftColor_1,
        ...objectKursiLeft.pos_W1, ...objectKursiLeft.leftColor_1,
        ...objectKursiLeft.pos_M3, ...objectKursiLeft.leftColor_1,

        ...objectKursiLeft.pos_W1, ...objectKursiLeft.leftColor_1,
        ...objectKursiLeft.pos_Z1, ...objectKursiLeft.leftColor_1,
        ...objectKursiLeft.pos_M3, ...objectKursiLeft.leftColor_1,
     
        ...objectKursiLeft.pos_Z1, ...objectKursiLeft.leftColor_1,
        ...objectKursiLeft.pos_A2, ...objectKursiLeft.leftColor_1,
        ...objectKursiLeft.pos_M3, ...objectKursiLeft.leftColor_1,

        ...objectKursiLeft.pos_A2, ...objectKursiLeft.leftColor_1,
        ...objectKursiLeft.pos_B2, ...objectKursiLeft.leftColor_1,
        ...objectKursiLeft.pos_M3, ...objectKursiLeft.leftColor_1,

        ...objectKursiLeft.pos_B2, ...objectKursiLeft.leftColor_1,
        ...objectKursiLeft.pos_C2, ...objectKursiLeft.leftColor_1,
        ...objectKursiLeft.pos_M3, ...objectKursiLeft.leftColor_1,

        ...objectKursiLeft.pos_C2, ...objectKursiLeft.leftColor_1,
        ...objectKursiLeft.pos_D2, ...objectKursiLeft.leftColor_1,
        ...objectKursiLeft.pos_M3, ...objectKursiLeft.leftColor_1,

        ...objectKursiLeft.pos_D2, ...objectKursiLeft.leftColor_1,
        ...objectKursiLeft.pos_E2, ...objectKursiLeft.leftColor_1,
        ...objectKursiLeft.pos_M3, ...objectKursiLeft.leftColor_1,

        ...objectKursiLeft.pos_E2, ...objectKursiLeft.leftColor_1,
        ...objectKursiLeft.pos_F2, ...objectKursiLeft.leftColor_1,
        ...objectKursiLeft.pos_M3, ...objectKursiLeft.leftColor_1,

        ...objectKursiLeft.pos_F2, ...objectKursiLeft.leftColor_1,
        ...objectKursiLeft.pos_G2, ...objectKursiLeft.leftColor_1,
        ...objectKursiLeft.pos_M3, ...objectKursiLeft.leftColor_1,

        ...objectKursiLeft.pos_G2, ...objectKursiLeft.leftColor_1,
        ...objectKursiLeft.pos_H2, ...objectKursiLeft.leftColor_1,
        ...objectKursiLeft.pos_M3, ...objectKursiLeft.leftColor_1,

        ...objectKursiLeft.pos_H2, ...objectKursiLeft.leftColor_1,
        ...objectKursiLeft.pos_I2, ...objectKursiLeft.leftColor_1,
        ...objectKursiLeft.pos_M3, ...objectKursiLeft.leftColor_1,

        ...objectKursiLeft.pos_I2, ...objectKursiLeft.leftColor_1,
        ...objectKursiLeft.pos_V1, ...objectKursiLeft.leftColor_1,
        ...objectKursiLeft.pos_M3, ...objectKursiLeft.leftColor_1,

        ...objectKursiLeft.pos_V1, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_J2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_I2, ...objectKursiLeft.leftColor_2,

        ...objectKursiLeft.pos_J2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_I2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_K2, ...objectKursiLeft.leftColor_2,

        ...objectKursiLeft.pos_I2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_K2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_L2, ...objectKursiLeft.leftColor_2,

        ...objectKursiLeft.pos_I2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_H2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_L2, ...objectKursiLeft.leftColor_2,

        ...objectKursiLeft.pos_L2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_M2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_H2, ...objectKursiLeft.leftColor_2,

        ...objectKursiLeft.pos_M2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_H2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_N2, ...objectKursiLeft.leftColor_2,

        ...objectKursiLeft.pos_H2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_N2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_O2, ...objectKursiLeft.leftColor_2,

        ...objectKursiLeft.pos_O2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_H2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_G2, ...objectKursiLeft.leftColor_2,
        
        ...objectKursiLeft.pos_O2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_G2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_P2, ...objectKursiLeft.leftColor_2,

        ...objectKursiLeft.pos_G2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_P2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_Q2, ...objectKursiLeft.leftColor_2,

        ...objectKursiLeft.pos_G2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_Q2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_F2, ...objectKursiLeft.leftColor_2,

        ...objectKursiLeft.pos_F2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_Q2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_R2, ...objectKursiLeft.leftColor_2,

        ...objectKursiLeft.pos_R2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_S2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_F2, ...objectKursiLeft.leftColor_2,

        ...objectKursiLeft.pos_F2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_S2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_T2, ...objectKursiLeft.leftColor_2,

        ...objectKursiLeft.pos_F2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_T2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_U2, ...objectKursiLeft.leftColor_2,

        ...objectKursiLeft.pos_F2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_U2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_E2, ...objectKursiLeft.leftColor_2,

        ...objectKursiLeft.pos_U2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_E2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_V2, ...objectKursiLeft.leftColor_2,

        ...objectKursiLeft.pos_E2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_V2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_W2, ...objectKursiLeft.leftColor_2,

        ...objectKursiLeft.pos_E2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_U2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_W2, ...objectKursiLeft.leftColor_2,

        ...objectKursiLeft.pos_E2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_Z2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_W2, ...objectKursiLeft.leftColor_2,

        ...objectKursiLeft.pos_E2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_Z2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_D2, ...objectKursiLeft.leftColor_2,

        //tiang kiri depan
        ...objectKursiLeft.pos_L2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_M2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_D3, ...objectKursiLeft.leftColor_1,

        ...objectKursiLeft.pos_D3, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_M2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_A3, ...objectKursiLeft.leftColor_1,

        ...objectKursiLeft.pos_C3, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_A3, ...objectKursiLeft.leftColor_1,
        ...objectKursiLeft.pos_D3, ...objectKursiLeft.leftColor_2,

        ...objectKursiLeft.pos_B3, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_C3, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_A3, ...objectKursiLeft.leftColor_1,

        //tiang kanan depan 
        ...objectKursiLeft.pos_T2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_U2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_L3, ...objectKursiLeft.leftColor_1,

        ...objectKursiLeft.pos_T2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_I3, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_L3, ...objectKursiLeft.leftColor_1,
        
        ...objectKursiLeft.pos_K3, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_J3, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_L3, ...objectKursiLeft.leftColor_1,

        ...objectKursiLeft.pos_J3, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_I3, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_L3, ...objectKursiLeft.leftColor_1,

        //tiang kiri blkng
        ...objectKursiLeft.pos_N2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_O2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_E3, ...objectKursiLeft.leftColor_1,

        ...objectKursiLeft.pos_O2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_E3, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_F3, ...objectKursiLeft.leftColor_1,

        //tiang kanan blkng
        ...objectKursiLeft.pos_R2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_S2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_H3, ...objectKursiLeft.leftColor_1,

        ...objectKursiLeft.pos_R2, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_G3, ...objectKursiLeft.leftColor_2,
        ...objectKursiLeft.pos_H3, ...objectKursiLeft.leftColor_1,

     // GAMBAR KANAN
        ...objectKursiRight.pos_E, ...objectKursiRight.rightColor_1,
        ...objectKursiRight.pos_S, ...objectKursiRight.rightColor_1,
        ...objectKursiRight.pos_F, ...objectKursiRight.rightColor_1,

        ...objectKursiRight.pos_F, ...objectKursiRight.rightColor_1,
        ...objectKursiRight.pos_G, ...objectKursiRight.rightColor_1,
        ...objectKursiRight.pos_S, ...objectKursiRight.rightColor_1,

        ...objectKursiRight.pos_G, ...objectKursiRight.rightColor_1,
        ...objectKursiRight.pos_H, ...objectKursiRight.rightColor_1,
        ...objectKursiRight.pos_S, ...objectKursiRight.rightColor_1,

        ...objectKursiRight.pos_H, ...objectKursiRight.rightColor_1,
        ...objectKursiRight.pos_I, ...objectKursiRight.rightColor_1,
        ...objectKursiRight.pos_S, ...objectKursiRight.rightColor_1,

        ...objectKursiRight.pos_J, ...objectKursiRight.rightColor_1,
        ...objectKursiRight.pos_I, ...objectKursiRight.rightColor_1,
        ...objectKursiRight.pos_S, ...objectKursiRight.rightColor_1,

        ...objectKursiRight.pos_K, ...objectKursiRight.rightColor_1,
        ...objectKursiRight.pos_J, ...objectKursiRight.rightColor_1,
        ...objectKursiRight.pos_S, ...objectKursiRight.rightColor_1,
        
        ...objectKursiRight.pos_K, ...objectKursiRight.rightColor_1,
        ...objectKursiRight.pos_L, ...objectKursiRight.rightColor_1,
        ...objectKursiRight.pos_S, ...objectKursiRight.rightColor_1,

        ...objectKursiRight.pos_L, ...objectKursiRight.rightColor_1,
        ...objectKursiRight.pos_M, ...objectKursiRight.rightColor_1,
        ...objectKursiRight.pos_S, ...objectKursiRight.rightColor_1,

        ...objectKursiRight.pos_M, ...objectKursiRight.rightColor_1,
        ...objectKursiRight.pos_N, ...objectKursiRight.rightColor_1,
        ...objectKursiRight.pos_S, ...objectKursiRight.rightColor_1,

        ...objectKursiRight.pos_N, ...objectKursiRight.rightColor_1,
        ...objectKursiRight.pos_O, ...objectKursiRight.rightColor_1,
        ...objectKursiRight.pos_S, ...objectKursiRight.rightColor_1,

        ...objectKursiRight.pos_O, ...objectKursiRight.rightColor_1,
        ...objectKursiRight.pos_P, ...objectKursiRight.rightColor_1,
        ...objectKursiRight.pos_S, ...objectKursiRight.rightColor_1,

        ...objectKursiRight.pos_P, ...objectKursiRight.rightColor_1,
        ...objectKursiRight.pos_Q, ...objectKursiRight.rightColor_1,
        ...objectKursiRight.pos_S, ...objectKursiRight.rightColor_1,

        ...objectKursiRight.pos_Q, ...objectKursiRight.rightColor_1,
        ...objectKursiRight.pos_R, ...objectKursiRight.rightColor_1,
        ...objectKursiRight.pos_S, ...objectKursiRight.rightColor_1,

        ...objectKursiRight.pos_R, ...objectKursiRight.rightColor_1,
        ...objectKursiRight.pos_E, ...objectKursiRight.rightColor_1,
        ...objectKursiRight.pos_S, ...objectKursiRight.rightColor_1,

        ...objectKursiRight.pos_R, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_Q, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_M1, ...objectKursiRight.rightColor_2,

        ...objectKursiRight.pos_M1, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_L1, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_Q, ...objectKursiRight.rightColor_2,

        ...objectKursiRight.pos_L1, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_F1, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_Q, ...objectKursiRight.rightColor_2,

        ...objectKursiRight.pos_F1, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_Q, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_P, ...objectKursiRight.rightColor_2,

        ...objectKursiRight.pos_F1, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_E1, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_P, ...objectKursiRight.rightColor_2,

        ...objectKursiRight.pos_E1, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_D1, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_P, ...objectKursiRight.rightColor_2,

        ...objectKursiRight.pos_D1, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_C1, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_P, ...objectKursiRight.rightColor_2,

        ...objectKursiRight.pos_C1, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_P, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_O, ...objectKursiRight.rightColor_2,

        ...objectKursiRight.pos_C1, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_B1, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_O, ...objectKursiRight.rightColor_2,

        ...objectKursiRight.pos_B1, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_A1, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_O, ...objectKursiRight.rightColor_2,

        ...objectKursiRight.pos_A1, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_N, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_O, ...objectKursiRight.rightColor_2,
        
        ...objectKursiRight.pos_A1, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_Z, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_N, ...objectKursiRight.rightColor_2,

        ...objectKursiRight.pos_Z, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_W, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_N, ...objectKursiRight.rightColor_2,

        ...objectKursiRight.pos_W, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_V, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_N, ...objectKursiRight.rightColor_2,

        ...objectKursiRight.pos_V, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_U, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_N, ...objectKursiRight.rightColor_2,

        ...objectKursiRight.pos_N, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_U, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_M, ...objectKursiRight.rightColor_2,

        ...objectKursiRight.pos_M, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_U, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_T, ...objectKursiRight.rightColor_2,

        ...objectKursiRight.pos_M, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_T, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_L, ...objectKursiRight.rightColor_2,
        // kanan kaki kiri depan
        ...objectKursiRight.pos_M1, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_L1, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_N1, ...objectKursiRight.rightColor_1,

        ...objectKursiRight.pos_M1, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_N1, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_Q1, ...objectKursiRight.rightColor_1,

        ...objectKursiRight.pos_P1, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_O1, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_N1, ...objectKursiRight.rightColor_1,

        ...objectKursiRight.pos_P1, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_Q1, ...objectKursiRight.rightColor_2,
        ...objectKursiRight.pos_N1, ...objectKursiRight.rightColor_1,

    // kanan kaki kanan depan
    ...objectKursiRight.pos_Z, ...objectKursiRight.rightColor_2,
    ...objectKursiRight.pos_W, ...objectKursiRight.rightColor_2,
    ...objectKursiRight.pos_K1, ...objectKursiRight.rightColor_1,

    ...objectKursiRight.pos_W, ...objectKursiRight.rightColor_2,
    ...objectKursiRight.pos_K1, ...objectKursiRight.rightColor_2,
    ...objectKursiRight.pos_G1, ...objectKursiRight.rightColor_1,

    ...objectKursiRight.pos_I1, ...objectKursiRight.rightColor_2,
    ...objectKursiRight.pos_G1, ...objectKursiRight.rightColor_2,
    ...objectKursiRight.pos_K1, ...objectKursiRight.rightColor_1,

    ...objectKursiRight.pos_H1, ...objectKursiRight.rightColor_2,
    ...objectKursiRight.pos_I1, ...objectKursiRight.rightColor_2,
    ...objectKursiRight.pos_G1, ...objectKursiRight.rightColor_1,

    //kanan kaki kanan blkng
    
    ...objectKursiRight.pos_B1, ...objectKursiRight.rightColor_2,
    ...objectKursiRight.pos_A1, ...objectKursiRight.rightColor_2,
    ...objectKursiRight.pos_U1, ...objectKursiRight.rightColor_1,

    ...objectKursiRight.pos_U1, ...objectKursiRight.rightColor_2,
    ...objectKursiRight.pos_T1, ...objectKursiRight.rightColor_2,
    ...objectKursiRight.pos_B1, ...objectKursiRight.rightColor_1,

    //kanan kaki kiri blkng
    
    ...objectKursiRight.pos_F1, ...objectKursiRight.rightColor_2,
    ...objectKursiRight.pos_E1, ...objectKursiRight.rightColor_2,
    ...objectKursiRight.pos_R1, ...objectKursiRight.rightColor_1,

    ...objectKursiRight.pos_R1, ...objectKursiRight.rightColor_2,
    ...objectKursiRight.pos_S1, ...objectKursiRight.rightColor_2,
    ...objectKursiRight.pos_E1, ...objectKursiRight.rightColor_1,

    ];

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);

    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);

    var shaderProgram = gl.createProgram();

    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 0);
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);

    var freeze = false;

    function onMouseClick(event) {
        freeze = !freeze;
    }

    document.addEventListener("click", onMouseClick);

    function onKeydown(event) {
        if (event.keyCode == 32) freeze = true;
    }

    function onKeyup(event) {
        if (event.keyCode == 32) freeze = false;
    }

    document.addEventListener("keydown", onKeydown);
    document.addEventListener("keyup", onKeyup);

    var speed = 0.0219;
    var change = 0;
    var uChange = gl.getUniformLocation(shaderProgram, "uChange");

    function moveVertices() {
        if (vertices[711] > 1.0 || vertices[1246] < -1.0) {
            speed = speed * -1;
        }
        for (let i = 676; i < vertices.length; i += 5) {
            vertices[i] = vertices[i] + speed;
        }
    }

    function render() {
        if (!freeze) {
            moveVertices();
        }

        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        
        change = change + speed;

        gl.uniform1f(uChange, change);

        gl.clearColor(0.0, 0.0, 0.0, 0.5);
        gl.clear(gl.COLOR_BUFFER_BIT);

        var primitive = gl.TRIANGLES;
        var offset = 0;
        var nVertex = 500;

        gl.drawArrays(primitive, offset, nVertex);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}