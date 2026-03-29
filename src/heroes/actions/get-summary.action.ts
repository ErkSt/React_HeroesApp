import { heroApi } from "../api/heroes.api";
import { type SummaryInformationResponse } from "../types/summary-information.response";

export const getSummaryAction = async () => {
    const { data } = await heroApi.get<SummaryInformationResponse>('/summary');

    return data;
}
