import { Component, For } from "solid-js";

import styles from "./Grid.module.css";

export interface GridItem {
  url: string;
  title: string;
  price?: string;
  image: { src: string; fit?: "cover" | "contain" };
  shortdesc?: string;
  tags?: string[];
  date?: string;
}

export interface GridProps {
  items: GridItem[];
}

export const Grid: Component<GridProps> = (props) => {
  console.log(props.items);
  return (
    <div class={styles.grid}>
      <For each={props.items}>
        {(item) => (
          <div class={styles.card}>
            <a href={item.url}>
              <img
                class={styles.image}
                src={`/${item.image.src}`}
                alt={item.title}
                style={{
                  "object-fit": item.image.fit,
                  margin: item.image.fit === "contain" ? "16px" : 0,
                  width:
                    item.image.fit === "contain" ? "calc(100% - 32px)" : "100%",
                }}
              />
            </a>
            <div class={styles.content}>
              <a href={item.url} class={styles.title}>
                {item.title}
              </a>

              {item.shortdesc !== undefined && (
                <div class={styles.desc}>{item.shortdesc}</div>
              )}

              {item.tags !== undefined && (
                <div class={styles.tags}>
                  <For each={item.tags}>
                    {(t) => (
                      <a href={`/search?tags=${t}`} class={styles.tag}>
                        #{t}
                      </a>
                    )}
                  </For>
                </div>
              )}
            </div>
          </div>
        )}
      </For>
    </div>
  );
};
