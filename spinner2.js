process.stdout.write('hello from spinner1.js... \rheyyy\n');

// setTimeout(() => {
//   process.stdout.write('\r|  ');
// },100);

// setTimeout (() => {
//   process.stdout.write('\r/  ');
// }, 300);

// setTimeout (() => {
//   process.stdout.write('\r-  ');
// }, 500);

// setTimeout (() => {
//   process.stdout.write('\r\\  ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|  ');
// },900);

// setTimeout (() => {
//   process.stdout.write('\r/  ');
// },1100);

// setTimeout (() => {
//   process.stdout.write('\r-  ');
// },1300);

// setTimeout (() => {
//   process.stdout.write('\r\\  ');
// },1500);
const spinny = () => {
  for (let time = 0; time < 15000; time ++) {
    setTimeout(() => {
      process.stdout.write('\r|  ');
  },(time += 100));
  
    setTimeout (() => {
      process.stdout.write('\r/  ');
    }, (time += 100));
  
    setTimeout (() => {
      process.stdout.write('\r-  ');
    }, (time += 100));
  
    setTimeout (() => {
      process.stdout.write('\r\\  ');
    }, (time += 100));
  }
};

spinny();
