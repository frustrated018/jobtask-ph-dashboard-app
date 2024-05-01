"use client";

import type { MenuProps } from "antd";
import { Breadcrumb, Button, Layout, Menu, theme } from "antd";
import { ClipboardList, LayoutDashboard, MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link href="/dashboard">Overview</Link>, "1", <LayoutDashboard />),
  getItem(
    <Link href="/dashboard/task-management">Task Management</Link>,
    "2",
    <ClipboardList />
  ),
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <section>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          breakpoint="lg"
          collapsedWidth="0"
          trigger={null}
          collapsed={collapsed}
        >
          <div className="" />
          <h2 className="text-lg font-bold text-white text-center mt-5">
            PH Dashboard
          </h2>
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
            style={{ marginTop: "20px" }}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: "#9ca3af" }}>
            <Button
              onClick={() => setCollapsed(!collapsed)}
              style={{ marginLeft: "20px", marginTop: "15px" }}
            >
              <MenuIcon />
            </Button>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: "#9ca3af",
                borderRadius: "25px",
              }}
            >
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>
    </section>
  );
}
