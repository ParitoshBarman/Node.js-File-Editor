# Node.js File Editor 📝

A simple Node.js CLI tool to perform basic file operations like create, read, append, delete, rename, and list files in the current working directory.

## 📦 Features

- Create a file with or without initial content
- Read content from a file
- Append content to an existing file
- Delete a file
- Rename a file
- List all files and directories in the current working directory

## 🚀 Usage

Use the following command structure:

```bash
node index.js <operation> <filename> [content/newfilename]
```

> Make sure you're running the command from the root directory of your project or where the file resides.

---

### 🔍 Read a File

```bash
node index.js read test.txt
```

**Expected Output:**

If the file exists:
```
The contents of the file "test.txt" is: Hello, I am content
```

If the file does not exist:
```
"test.txt" file is not found!
```

---

### ✍️ Append to a File

```bash
node index.js append test.txt "New content to append"
```

**Expected Output:**

```
Content appended to the file "test.txt"
```

---

### 🗑️ Delete a File

```bash
node index.js delete test.txt
```

**Expected Output:**

```
File "test.txt" deleted
```

If file does not exist:
```
"test.txt" file is not found!
```

---

### 📁 Create a File

```bash
node index.js create newFile.txt "Initial content goes here"
```

**Expected Output:**

```
File "newFile.txt" created
```

You can also leave the content blank:

```bash
node index.js create empty.txt
```

---

### ✏️ Rename a File

```bash
node index.js rename oldName.txt newName.txt
```

**Expected Output:**

```
File "oldName.txt" renamed to "newName.txt"
```

---

### 📜 List Files and Folders

```bash
node index.js list
```

**Expected Output:**

```
List of File/Dir
1. index.js
2. README.md
3. test.txt
...
```

---

### ❌ Invalid Operation

```bash
node index.js unknown test.txt
```

**Output:**

```
Invalid operation 'unknown'
```

---

## 🛠️ Requirements

- Node.js installed on your system

## 📂 Example Project Structure

```
project-root/
│
├── index.js
└── README.md
```

---
