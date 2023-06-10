 /* 
// Metacrafters - Beginning Javascript
//
// This is a javascript playground for testing your javascript code!
// When you are ready to test, simply right click and select "Run Code"
// to see the result print below. If you have more then one snippet of code,
// you can highlight the code you want to test, and then right click and select "Run Code"
*/

/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
var arr=[];
var count=0;
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
class NFT {
    constructor(name,color,style,medium) {
      this.name = name;
      this.color = color;
      this.style = style;
      this.medium = medium;
    }
  }
function mintNFT (name,color,style,medium) {
    var nft=[name,color,style,medium];
    arr[count++]=nft;

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    console.log("The list of total NFTs:\n");
    for(let i=0;i<count;i++){
        console.log(arr[i]+"\n");
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("The total number of NFTs created by user:")
    console.log(count);

}

// call your functions below this line
mintNFT("Alice","Blue","Surrealism","Water Color");
mintNFT("Enola","Cyan","Concept art","Oil pastels");

listNFTs();
getTotalSupply();

