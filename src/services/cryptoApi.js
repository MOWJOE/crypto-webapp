import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
	"X-RapidAPI-Key": "94de1237e0mshc918ee6de2d7050p1c381cjsnd98deace564e",
	"X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
	reducerPath: "cryptoApi",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: (count) => createRequest(`/coins?limit=${count}`),
		}),
		getCryptoDetails: builder.query({
			query: (coinId) => createRequest(`/coin/${coinId}`),
		}),
	}),
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery } = cryptoApi;

// const options = {
// 	method: "GET",
// 	url: "https://coinranking1.p.rapidapi.com/coins",
// 	params: {
// 		referenceCurrencyUuid: "yhjMzLPhuIDl",
// 		timePeriod: "24h",
// 		"tiers[0]": "1",
// 		orderBy: "marketCap",
// 		orderDirection: "desc",
// 		limit: "50",
// 		offset: "0",
// 	},
// 	headers: {
// 		"X-RapidAPI-Key": "94de1237e0mshc918ee6de2d7050p1c381cjsnd98deace564e",
// 		"X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
// 	},
// };
