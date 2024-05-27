// To identify whether an app is legitimate, some applications 
// will test to see if the app was installed with the correct
// package.
// Here, com.android.vending means that the app is installed
// from Google Play Store (note that the package managers)
// differ based on the store on which the app is released.

// This is the old API (will work for older android versions)
// The hooked function is now deprecated, so on newer Android
// devices you will need to use a different function (below).
function bypass_install_package_old() {
    Java.use("android.app.ApplicationPackageManager").getInstallerPackageName.implementation = function (name) {
        return "com.android.vending"
    }
}

// This is the new API. As this function is newly introduced,
// older versions of Android will error. Only use this for
// newer Android versions.
function bypass_install_package_new() {
    const IS = Java.use("android.content.pm.InstallSourceInfo")
    IS.getInstallingPackageName.implementation = function() {
        return "com.android.vending"
    }
}