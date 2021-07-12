// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase());
    }

    return newStrand;
};

const pAequorFactory = (num, array) => {
    return {
        specimenNum: 'specimenNum',
        dna: 'dna',
        mutate() {
            let index = Math.floor(Math.random() * this.dna.length);
            let newBase = returnRandBase();
            while (this.dna[index] === newBase) {
                newBase = returnRandBase();
            }
            return this.dna.splice(index, 1, newBase);
        },
        compareDNA(pAequor) {
            let counter = 0;
            let calculate = Math.round(counter / 15) * 100;
            for (let i = 0; i < this.dna.length; i++) {
                if (pAequor[i] === this.dna[i]) {
                    counter += 1;
                }
            }
            console.log(`${this.specimenNum} are ${calculate} equal`);
        },
        willLikelySurvive() {
            let counter = 0;
            for (let i = 0; i < this.dna.length; i++) {
                let counter = 0;
                if (this.dna[i] === 'C' || this.dna[i] === 'G') {
                    counter += 1;
                }
            }
            if (counter >= 9) {
                return true;
            } else {
                return false;
            }
        },
    };
};
let arrayOfPaequor = [];
for (let i = 1; i <= 30; i++) {
    const newOrg = pAequorFactory(i, mockUpStrand);
    if (newOrg.willLikelySurvive()) {
        arrayOfPaequor.push(newOrg);
    }
}
console.log(arrayOfPaequor);
