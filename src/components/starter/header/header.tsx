import { component$ } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";
import styles from "./header.module.css";

const menus = [
  {
    href: "/products",
    title: "Products",
  },
  {
    href: "/blog",
    title: "Blog",
  },
  {
    href: "/about",
    title: "Contact",
  },
];
export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="wsijogja">
            <QwikLogo height={50} width={60} />
            <span class={styles.title}>wsijogja</span>
          </a>
        </div>
        <ul>
          {menus.map((menu:{href: string, title: string}, key) => (
            <li key={key}>
              <a
                href={menu.href}
                target={menu.title}
              >
                {menu.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
});
