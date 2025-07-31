import React from 'react';

interface ResultData {
  title: string;
  winner: string;
}

const resultData: ResultData[] = [
  {
    title: 'Spideryachty',
    winner: '@zealot_off @fai.sama_ @kennyakinlolu @3leje @marrni_',
  },
  {
    title: 'Rrrocky',
    winner: '@dshawn.wav @j3ccy_ @lloydsxo @d0lly_p @olivinco_ @dinma.aliu',
  },
  {
    title: 'Raver',
    winner: '@ccrybaby66 @nosatiere @omlitsuche @babysmok_',
  },
  {
    title: 'Fashion Roadman',
    winner: '@debbyfasingha @obi.fortune @darapmakwe',
  },
  { title: 'DOOM', winner: '@ayotos1n @wigingod' },
  {
    title: 'AZAMAN',
    winner: '@tehpajphotoalbum @notdlm  @_.tomiwaaaa',
  },
  { title: 'Boat Boy', winner: '@ezbobie @pattydrewit' },
  { title: 'Goldenboy', winner: '@kenennaezenwa @shaesha33' },
  { title: 'Ashley', winner: '@_tea.me @reggaeratt' },
  {
    title: 'Subaru Boy',
    winner: '@subaruboy44 @jitesart @shaye.e_',
  },
  { title: 'Tyler', winner: '@emete.etim @ban_jiggy' },
  { title: 'Frank', winner: '@deradondada @finalgirl_world' },
  { title: 'Teenx', winner: '@tob1lxba @kenennaezenwa' },
  {
    title: 'Igormaniac',
    winner: '@emmainhd @ollie_sahh',
  },
  { title: 'Hoodie Gurl', winner: '@_myraa.xx @_efemena' },
  { title: 'Cench', winner: '@yeh0shua__' },
  { title: 'Tyla', winner: '@hellozizii' },
];

const PosterResultsTable: React.FC = () => {
  /*
  Contestants
    {
  Raver: [
    'deradondada',
    'byvictorchimdi',
    'manex_draws',
    'creatorpikin',
    'ccrybaby66',
    'nosatiere',
    'uche',
    'Smokherself'
  ],
  Frank: [ 'deradondada', 'Eufrasia' ],
  Goldenboy: [ 'kenennaezenwa', 'Shae', 'Ollie' ],
  Igormaniac: [ 'emmainhd' ],
  'Hoodie Gurl': [ '_myraa.xx' ],
  Cench: [ 'yeh0shua__' ],
  DOOM: [ 'ayotos1n', 'zomvilien', 'wigingod', 'qazxs____', 'jay_en23' ],
  'Boat Boy': [ 'deradondada', 'e.s.i.r.i', 'pattydrewit', 'Ezekiel' ],
  Rrrocky: [
    'deradondada',
    'j3ccy_',
    'sh2madeit',
    'lloydsxo',
    'd0lly_p',
    'cozyut3_tm',
    'olivinco_',
    'dinma.aliu',
    'Dshawn'
  ],
  Ashley: [ '_tea.me', 'reggaeratt', 'khalkeu.s' ],
  Spideryachty: [
    'heart_art_ella',
    'fai.sama_',
    'aizebeokai_',
    'kennyakinlolu',
    '3leje',
    'marrni_',
    'wigingod',
    'alvin_jpg',
    'made0v0pium',
    'Ollie',
    'Musa Daniel Tunde'
  ],
  'Subaru Boy': [ 'subaruboy44', 'jitesart', 'Shaye' ],
  Tyler: [ 'emete.etim', 'Ollie', 'Banjoko Daniel' ],
  Tyla: [ 'hellozizii' ],
  Teenx: [ 'tob1lxba', 'kenennaezenwa' ],
  'Fashion Roadman': [
    'reckyraph',
    '_ayomiiide_',
    'debbyfasingha',
    'uzomadueke',
    'obi.fortune',
    'darapmakwe'
  ],
  AZAMAN: [
    'dtlyyyy',
    'deradondada',
    'tehpajphotoalbum',
    'notdlm',
    '_.tomiwaaaa'
  ]
}
    */
  return (
    <div className="p-6 font-outfit text-orange-600 max-w-5xl m-auto">
      <h2 className="text-2xl font-bold mb-4 font-funnel">The Victors</h2>
      <table className="min-w-full rounded shadow">
        <thead className="text-left">
          <tr>
            <th className="pr-4 py-2">Posters</th>
            <th className="pl-4 py-2">Winners</th>
          </tr>
        </thead>
        <tbody>
          {resultData.map((item, index) => (
            <tr key={index} className="border-t hover:bg-orange-950">
              <td className="pr-4 py-2">{item.title}</td>
              <td className="pl-4 py-2 font-semibold text-green-500">
                {item.winner}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PosterResultsTable;
