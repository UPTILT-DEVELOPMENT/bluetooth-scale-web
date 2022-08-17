// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { addData } from 'src/config/firebase'

type Data = {
    measurement: number,
    date: any
}

const fakeData1: Data[] = [
    { measurement: 1, date: 'January' },
    { measurement: 2, date: 'February' },
    { measurement: 3, date: 'March' },
    { measurement: 4, date: 'April' },
    { measurement: 5, date: 'May' },
    { measurement: 6, date: 'June' },
    { measurement: 7, date: 'July' },
]

const fakeData2: Data[] = [
    { measurement: 7, date: 'January' },
    { measurement: 6, date: 'February' },
    { measurement: 5, date: 'March' },
    { measurement: 4, date: 'April' },
    { measurement: 3, date: 'May' },
    { measurement: 2, date: 'June' },
    { measurement: 1, date: 'July' },
]
const fakeData3: Data[] = [
    { measurement: 7, date: 'January' },
    { measurement: 1, date: 'February' },
    { measurement: 6, date: 'March' },
    { measurement: 2, date: 'April' },
    { measurement: 5, date: 'May' },
    { measurement: 3, date: 'June' },
    { measurement: 4, date: 'July' },
]
const fakeData4: Data[] = [
    { measurement: 1, date: 'January' },
    { measurement: 7, date: 'February' },
    { measurement: 2, date: 'March' },
    { measurement: 6, date: 'April' },
    { measurement: 3, date: 'May' },
    { measurement: 5, date: 'June' },
    { measurement: 4, date: 'July' },
]



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data[]>
) {
    if (req.method === "POST") {
        const { weight, type } = req.body

        await addData(weight, type)
        return res.status(200).json([])
    } else if (req.method === "GET") {
        const { wasteType } = req.query
        let wasteData: Data[] = []
        switch (wasteType) {
            case "1":
                wasteData = fakeData1
                break;
            case "2":
                wasteData = fakeData2
                break;
            case "3":
                wasteData = fakeData3
                break;
            case "4":
                wasteData = fakeData4
                break;
            default:
                break;
        }


        return res.status(200).json(wasteData)
    }

}
