# React Native FlatList/SectionList `keyExtractor` Issues

This repository demonstrates a common error in React Native when using FlatList or SectionList components: improper or missing `keyExtractor` function.  This can result in various UI glitches, performance issues and rendering problems. The `bug.js` file showcases the problematic code and `bugSolution.js` shows how to correctly implement a `keyExtractor` function.

## Problem

Incorrect or missing `keyExtractor` can lead to inefficient updates in FlatLists. The issue usually presents as visual anomalies, incorrect rendering, and performance problems. 

## Solution

Always provide a `keyExtractor` function that generates unique keys for each item in your data array.  The key must be unique for every item; using an index might seem simple but will cause issues if you modify the list frequently (inserting or removing elements).  Ideally, you should use a unique identifier from your data source (e.g., an ID).