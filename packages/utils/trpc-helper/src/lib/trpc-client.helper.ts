// import { httpBatchLink, loggerLink } from '@trpc/client';
// import { createTRPCNext } from '@trpc/next';
// import { ReturnTypeCreateTrpc } from './trpc.helper';

// function getBaseUrl() {
//   if (typeof window !== 'undefined')
//     // browser should use relative path
//     return '';

//   if (process.env.VERCEL_URL)
//     // reference for vercel.com
//     return `https://${process.env.VERCEL_URL}`;

//   // assume localhost
//   return `http://localhost:${process.env.PORT ?? 4200}`;
// }

// export const createApi = <T extends ReturnTypeCreateTrpc['router']>() =>
//   createTRPCNext<T>({
//     config(opts) {
//       return {
//         links: [
//           loggerLink({}),
//           httpBatchLink({
//             /**
//              * If you want to use SSR, you need to use the server's full URL
//              * @link https://trpc.io/docs/ssr
//              **/
//             url: `${getBaseUrl()}`, // /api/trpc

//             // You can pass any HTTP headers you wish here
//             async headers() {
//               return {
//                 // authorization: getAuthCookie(),
//               };
//             },
//           }),
//         ],
//       };
//     },
//     /**
//      * @link https://trpc.io/docs/ssr
//      **/
//     ssr: false,
//   });
