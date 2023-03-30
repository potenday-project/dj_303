import { css } from "@emotion/css";
import Head from "next/head";
import Link from "next/link";
import Button from "../../components/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>DJ303 - 비슷한 노래를 추천드릴게요.</title>
      </Head>
      <main>
        <div>Text</div>
        <Link
          href="/create"
          className={css`
            text-decoration: none;
          `}
        >
          <Button text="시작하기"></Button>
        </Link>
        <Button color="secondary" text="플레이리스트 둘러보기"></Button>
      </main>
    </>
  );
}
