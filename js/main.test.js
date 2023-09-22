import { test, expect, mock, jest } from "bun:test";
import KanbanAPI from "./api/KanbanAPI.js";

KanbanAPI.getItems = jest.fn(() => {
  return 11;
})
KanbanAPI.insertItem = jest.fn(() => {
  return 22;
})


const random = mock(() => Math.random());

test("KanbanAPI", () => {
  expect(KanbanAPI.getItems()).toBe(11);
});

test("KanbanAPI insertItem", () => {
  expect(KanbanAPI.insertItem()).toBe(22);
});
