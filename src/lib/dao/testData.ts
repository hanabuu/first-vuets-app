import sqlite from 'sqlite3'
import * as testType from '@/lib/interface/testType'
// import logger from "@/common/logger"

export class testDataDao{
    private dTest: testType.cTest[];

    constructor(){
        this.dTest = [];
    }

    public getTestData = (dbCon: sqlite.Database): void => {
        dbCon.all('SELECT test1,test2 FROM test', (error, rows: testType.cTest[]) => {
            if(error) {
                console.error('Error!', error);
                return;
            }
            for(let i=0; i<rows.length; i++){
                this.dTest.push(rows[i]);
                console.log(rows[i].test1, rows[i].test2);
            }
        });

    }
}