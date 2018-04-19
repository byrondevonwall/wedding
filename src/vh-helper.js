export const getVhDiff = () => {
  //create fixed div
  const measureFixed = document.createElement('div');
  measureFixed.style.cssText = 'position: fixed; top: 0; bottom: 0;';
  //insert fixed div -- this returns actual viewport size
  document.documentElement.insertBefore(measureFixed, document.documentElement.firstChild);

  //create div sized with vh
  const measureVh = document.createElement('div');
  measureVh.style.cssText = 'position: fixed; top: 0; height: 100vh;';
  //insert vh div -- if device is running ios this div's height will be larger than that of the fixed div
  document.documentElement.insertBefore(measureVh, document.documentElement.firstChild);

  //compare height of fixed div to height of vh div
  const fixedHeight = measureFixed.offsetHeight;
  const vhHeight = measureVh.offsetHeight;
  const vhDiff = vhHeight - fixedHeight;

  //remove measurement divs from the dom
  document.documentElement.removeChild(measureFixed);
  document.documentElement.removeChild(measureVh);

  //return offset value -- px difference between safari's returned vh and actual vh
  return vhDiff;
};

//put a global css variable into the dom that allows css to access the vhDiff value directly
const setCssVar = (varName, vhDiff) => {
  document.documentElement.style.setProperty(`--${ varName }`, `${ vhDiff }px`);
};

export const measureVh = (varName) => {
  //if the varName passed is a string, use it.  if not set varName to '--vh-diff'
  varName = typeof varName === 'string' ? varName : 'vh-diff';
  //get the diff
  const diff = getVhDiff();
  //if the diff is zero, return false for js eval purposes and exit the function cuz aint nothin to do
  if (!diff) return false;
  //if the diff is non-zero update our css var
  setCssVar(varName, diff);
  //listen for an orientation change, as that will change the diff (keyboards don't trigger resize, so no point in listening for a resize and degrading perf)
  window.addEventListener('orientationchange', () => {
    //get diff (b/c we know it will have changed on orientationchange)
    const newDiff = getVhDiff();
    //setVar
    setCssVar(varName, newDiff);
  }, false);
  //return diff for setting with js
  return diff;
};

export default measureVh;
