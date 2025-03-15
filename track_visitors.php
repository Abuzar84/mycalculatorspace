<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection
$servername = "localhost";
$username = "u738897871_databasespace"; // Replace with your database username
$password = "Mybase@8454"; // Replace with your database password
$dbname = "u738897871_mycalculator"; // Replace with your database name

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get visitor details
$user_ip = $_SERVER['REMOTE_ADDR'];
$user_agent = $_SERVER['HTTP_USER_AGENT'];
$page_visited = $_SERVER['REQUEST_URI'];

// Debugging: Print visitor details
echo "IP Address: " . $user_ip . "<br>";
echo "User Agent: " . $user_agent . "<br>";
echo "Page Visited: " . $page_visited . "<br>";

// Check if the visitor already exists for this page
$check_sql = "SELECT id, view_count FROM visitor_data WHERE ip_address = ? AND device = ? AND page_visited = ?";
$check_stmt = $conn->prepare($check_sql);

if ($check_stmt) {
    $check_stmt->bind_param("sss", $user_ip, $user_agent, $page_visited);
    $check_stmt->execute();
    $check_stmt->store_result();

    if ($check_stmt->num_rows > 0) {
        // Visitor exists, update view count
        $check_stmt->bind_result($id, $view_count);
        $check_stmt->fetch();
        $new_view_count = $view_count + 1;

        $update_sql = "UPDATE visitor_data SET view_count = ?, visit_time = CURRENT_TIMESTAMP WHERE id = ?";
        $update_stmt = $conn->prepare($update_sql);

        if ($update_stmt) {
            $update_stmt->bind_param("ii", $new_view_count, $id);
            $update_stmt->execute();
            $update_stmt->close();
            echo "View count updated for existing record.";
        } else {
            echo "Error preparing update statement: " . $conn->error;
        }
    } else {
        // Visitor does not exist, insert new record
        $insert_sql = "INSERT INTO visitor_data (ip_address, device, page_visited, view_count) VALUES (?, ?, ?, 1)";
        $insert_stmt = $conn->prepare($insert_sql);

        if ($insert_stmt) {
            $insert_stmt->bind_param("sss", $user_ip, $user_agent, $page_visited);
            $insert_stmt->execute();
            $insert_stmt->close();
            echo "New visitor record created.";
        } else {
            echo "Error preparing insert statement: " . $conn->error;
        }
    }

    $check_stmt->close();
} else {
    echo "Error preparing check statement: " . $conn->error;
}

$conn->close();
?>